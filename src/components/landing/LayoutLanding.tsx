import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { ScrollToTop } from "../ScrollToTop";

 

export default function LayoutLanding() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Outlet />
    </div>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
