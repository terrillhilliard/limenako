"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

// Respect the OS "reduce motion" setting for every Motion animation
// (ui-ux-pro-max: reduced-motion, High).
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
