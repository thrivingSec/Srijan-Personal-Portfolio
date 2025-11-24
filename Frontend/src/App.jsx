import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full overflow-y-scroll bg-gray-950 no-scrollbar">
      <Header />
      <Hero />
      <About />
      <Projects />
      <ContactForm />
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
