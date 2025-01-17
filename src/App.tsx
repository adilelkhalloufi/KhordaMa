import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
 import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
 import { ScrollToTop } from "./components/ScrollToTop";
 import { Sponsors } from "./components/Sponsors";
 import "./App.css";
import i18n from "./i18n";
function App() {
  // Handle language direction change
i18n.on('languageChanged', (lng) => {
  // Set the text direction based on language
  if (lng === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
});

// Initialize the direction based on the default language
if (i18n.language === 'ar') {
  document.documentElement.setAttribute('dir', 'rtl');
} else {
  document.documentElement.setAttribute('dir', 'ltr');
}
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
