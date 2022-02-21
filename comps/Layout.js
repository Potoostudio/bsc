import Navbar from "./Navbar"
import NavBarMenu from "./navBarMenu"
import Footer from "./footer"

const Layout = ({ children }) => {
    return ( 
        <>
        <NavBarMenu />
        {children}
        <Footer/>
        </>
    );
}

export default Layout