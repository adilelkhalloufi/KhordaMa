import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { ScrollToTop } from "../ScrollToTop";
import { Header } from "../Header";




export default function LayoutLanding() {
  return (
    <>
      <Header />
      <div className="container mt-20">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  )
}
