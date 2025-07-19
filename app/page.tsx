// import Image from "next/image";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Price from "./components/Price";

export default function Home() {
  return (
    <div>
      <Hero />
      <Price />
      <Footer />
    </div>
  );
}
