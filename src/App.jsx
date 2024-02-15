import React from "react";
import Home from "./sections/Home/Home";
import Deliver from "./sections/Deliver/Deliver";
import SelectedWorks from "./sections/SelectedWorks/SelectedWorks";
import Services from "./sections/Services/Services";
import Team from "./sections/Team/Team";
import Clients from "./sections/Clients/Clients";
import CTA from "./sections/CTA/CTA";
import Footer from "./sections/Footer/Footer";


const App = () => {
  return (
    <main className="bg-[#1e1e20]">
      <Home />
      <Deliver />
      <SelectedWorks />
      <Services />
      <Team />
      <Clients />
      <CTA />
      <Footer />
    </main>
  );
};

export default App;