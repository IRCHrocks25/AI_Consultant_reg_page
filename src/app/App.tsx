import { useEffect } from "react";
import { Cursor } from "./components/Cursor";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Strip } from "./components/Strip";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Clear } from "./components/Clear";
import { Catalogue } from "./components/Catalogue";
import { How } from "./components/How";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Final } from "./components/Final";
import { Footer } from "./components/Footer";
import { useReveal } from "./components/useReveal";

export default function App() {
  useReveal();

  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--white)",
        fontFamily: "var(--body)",
      }}
    >
      <Cursor />
      <Nav />
      <Hero />
      <Intro />
      <Strip />
      <Problem />
      <Solution />
      <Clear />
      <Catalogue />
      <How />
      <Testimonials />
      <FAQ />
      <Final />
      <Footer />
    </div>
  );
}