import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import RitualSteps from "@/components/RitualSteps";
import Products from "@/components/Products";
import Heritage from "@/components/Heritage";
import Gallery from "@/components/Gallery";
import Distribution from "@/components/Distribution";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <RitualSteps />
        <Products />
        <Heritage />
        <Gallery />
        <Distribution />
      </main>
      <Footer />
    </>
  );
}
