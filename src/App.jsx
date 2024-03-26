import React from "react";
import Home from "./sections/Home/Home";
import Deliver from "./sections/Deliver/Deliver";
import Process from "./sections/Process/Process";
import Services from "./sections/Services/Services";
import Showcase from "./sections/Showcase/Showcase";
import CTA from "./sections/CTA/CTA";
import Footer from "./sections/Footer/Footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
const App = () => {
  return (
    <main className="bg-[#1e1e20]">
      <Home />
      <Deliver />
      <Showcase />
      <Services />
      <Process />
      <CTA />
      <Footer />
      <Analytics />
      <SpeedInsights/>
    </main>
  );
};

export default App;