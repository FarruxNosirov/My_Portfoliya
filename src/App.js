import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Expereince from "./Components/Expereince/Expereince";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Portifolio from "./Components/Portifolio/Portifolio";
import Services from "./Components/services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";

const App = () => {
  return (
    <section>
      <Header />
      <Nav />
      <About />
      <Expereince />
      <Services />
      <Portifolio />
      <Testimonials />
      <Contact />
      <Footer />
    </section>
  );
};

export default App;
