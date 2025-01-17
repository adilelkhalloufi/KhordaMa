interface LayoutLandingProps {
     
    title?: string;
    children?: React.ReactNode;
  }
import NavBar from "../Navbar"
import Footer from "../Footer"

export default function LayoutLanding({title ,children} : LayoutLandingProps) {
  return (
    <>
    <NavBar/>
    {children}
    <Footer/>
    </>
  )
}
