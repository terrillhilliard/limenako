"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { PRODUCTS, getProduct } from "./products";

type CartItem = {
  productId: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  itemCount: number;
  subtotalCents: number;
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
};

const STORAGE_KEY = "limenako-cart";
const EMPTY_ITEMS: CartItem[] = [];

function parseItems(raw: string | null): CartItem[] {
  if (!raw) return EMPTY_ITEMS;
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return EMPTY_ITEMS;
    return parsed.filter(
      (item): item is CartItem =>
        typeof item?.productId === "string" &&
        typeof item?.quantity === "number" &&
        getProduct(item.productId) !== undefined
    );
  } catch {
    return EMPTY_ITEMS;
  }
}

// Module-level store: mutated outside React and read via useSyncExternalStore,
// which resolves the SSR/localStorage hydration mismatch without setState-in-effect.
let cartItems: CartItem[] = EMPTY_ITEMS;
if (typeof window !== "undefined") {
  cartItems = parseItems(window.localStorage.getItem(STORAGE_KEY));
}
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

function persist() {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }
}

function setCartItems(next: CartItem[]) {
  cartItems = next;
  persist();
  notify();
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): CartItem[] {
  return cartItems;
}

function getServerSnapshot(): CartItem[] {
  return EMPTY_ITEMS;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((productId: string, quantity = 1) => {
    if (!getProduct(productId)) return;
    const existing = cartItems.find((item) => item.productId === productId);
    const next = existing
      ? cartItems.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      : [...cartItems, { productId, quantity }];
    setCartItems(next);
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string) => {
    setCartItems(cartItems.filter((item) => item.productId !== productId));
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(cartItems.filter((item) => item.productId !== productId));
      return;
    }
    setCartItems(
      cartItems.map((item) => (item.productId === productId ? { ...item, quantity } : item))
    );
  }, []);

  const clear = useCallback(() => setCartItems(EMPTY_ITEMS), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotalCents = useMemo(
    () =>
      items.reduce((sum, item) => {
        const product = getProduct(item.productId);
        return sum + (product ? product.priceCents * item.quantity : 0);
      }, 0),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      isOpen,
      itemCount,
      subtotalCents,
      addItem,
      removeItem,
      setQuantity,
      clear,
      open,
      close,
    }),
    [items, isOpen, itemCount, subtotalCents, addItem, removeItem, setQuantity, clear, open, close]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}

export function useCartLines() {
  const { items } = useCart();
  return items
    .map((item) => {
      const product = getProduct(item.productId);
      return product ? { product, quantity: item.quantity } : null;
    })
    .filter((line): line is { product: (typeof PRODUCTS)[number]; quantity: number } => line !== null);
}
