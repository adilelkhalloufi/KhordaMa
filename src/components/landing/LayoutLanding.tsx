import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { ScrollToTop } from "../ScrollToTop";

interface LayoutLandingProps {
  
    children?: React.ReactNode;
  }
 

export default function LayoutLanding({children} : LayoutLandingProps) {
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
