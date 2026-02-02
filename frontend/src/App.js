import React from "react";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import BestSellers from "./components/BestSellers";
import Gallery from "./components/Gallery";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <BestSellers />
      <Gallery />
      <Reservation />
      <Contact />
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
