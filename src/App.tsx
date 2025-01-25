import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Newsletter } from "./components/Newsletter";
import { Sponsors } from "./components/Sponsors";
import "./App.css";
function App() {

  return (
    <>

      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      {/* <Features /> */}
      {/* <Services /> */}
      <Cta />
      {/* <Testimonials /> */}
      {/* <Team /> */}
      {/* <Pricing /> */}
      <Newsletter />
      <FAQ />

    </>
  );
}

export default App;
