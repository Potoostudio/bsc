import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {

    const [windowDimension, setWindowDimension] = useState(null);
    const [isActive, setActive] = useState("false");
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, []);
    
    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowDimension <= 769;

    const handleToggle = () => {
        setActive(!isActive);
    };

    const addClass = index => {
        setActiveIndex(index);
    };

    return (
        <>
       {isMobile ? (
           <div className="container navBar-container">
               <div className="row justify-content-end pt-2">
                   <div className="col-3 pr-0 text-center btn-toggle-col text-right-iPod">
                        <button className="btn btn-toggle" onClick={handleToggle}>
                            <Image src="/mobile-icon.svg" 
                            width={30}
                            height={30}
                            />
                        </button>
                   </div>
               </div>
            <div className="row justify-content-center logo-mobile-row">
                <div className="col-12 px-0">
                    <Link href="/">
                         <a  className="logo-a">
                             <Image 
                             src="/bsc-enclosures-header-logo.webp"
                             alt="BSC logo"
                             width={558}
                             height={176}
                             className="100%"
                             />
                         </a>
                     </Link>
                </div>
            </div>
            <div className={isActive ? "hide" : "row justify-content-center navBar-list-mobile-row"}>
                <ul className="list navBar-list-mobile">
                    <li className="item">
                        <Link href="/wall-mount" >
                             <a className="navBar-link" onClick={handleToggle}>Wall Mount</a>
                         </Link>
                    </li>
                    <li className="item">
                        <Link href="/totems">
                             <a className="navBar-link" onClick={handleToggle}>Totems</a>
                         </Link>
                    </li>
                    <li className="item">
                        <Link href="/kiosks">
                             <a className="navBar-link" onClick={handleToggle}>Angled Kiosks</a>
                         </Link>
                    </li>
                    <li className="item">
                        <Link href="/outdoor">
                             <a className="navBar-link" onClick={handleToggle}>Outdoor</a>
                         </Link>
                    </li>
                    <li className="item">
                        <Link href="/wellness-station">
                             <a className="navBar-link" onClick={handleToggle}>Wellness Station</a>
                         </Link>
                    </li>
                    <li className="item">
                        <Link href="/product-info">
                             <a className="navBar-link" onClick={handleToggle}>Catalog</a>
                         </Link>
                    </li>
                    <li className="item">
                        <Link href="/projects">
                              <a className="navBar-link" onClick={handleToggle}>Projects</a>
                         </Link>
                    </li>
                    <li className="item">
                        <Link href="/custom">
                             <a className="navBar-link" onClick={handleToggle}>Custom</a>
                         </Link>
                    </li>
                    <li className="item">
                        <Link href="/contact">
                             <a className="navBar-link" onClick={handleToggle}>Contact Us</a>
                         </Link>
                    </li>
                </ul>
            </div>
            
            </div>
       ) : (
        <div className="navbar px-0 pt-md-0">
        <div className="container-fluid justify-content-center px-0">
            <div className="row w-100 pb-md-3 d-none">
                <div className="col-2">
                    <a href="tel:8882431194" className="phone-number">888.243.1194</a>
                </div>
            </div>
            <div className="row w-100 justify-content-center py-md-4 navbar-bg-blue">
                 <div className="col-12 text-center">
                     <Link href="/">
                         <a  className="logo-a">
                             <Image 
                             src="/bsc-enclosures-header-logo.webp"
                             alt="BSC logo"
                             width={558}
                             height={176}
                             />
                         </a>
                     </Link>
                 </div>
             </div>
             <nav className="navBar">
                 <ul className="navBar-list">
                     <li className="navBar-item">
                         <Link href="/wall-mount">
                             <a className="navBar-link">Wall Mount</a>
                         </Link>
                     </li>
                     <li className="navBar-item">
                         <Link href="/totems">
                             <a className="navBar-link">Totems</a>
                         </Link>
                     </li>
                     <li className="navBar-item">
                         <Link href="/kiosks">
                             <a className="navBar-link">Angled Kiosks</a>
                         </Link>
                     </li>
                     <li className="navBar-item">
                         <Link href="/outdoor">
                             <a className="navBar-link">Outdoor</a>
                         </Link>
                     </li>
                     <li className="navBar-item">
                         <Link href="/wellness-station">
                             <a className="navBar-link">Wellness Station</a>
                         </Link>
                     </li>
                     <li className="navBar-item">
                         <Link href="/product-info">
                             <a className="navBar-link">Catalog</a>
                         </Link>
                     </li>
                     <li className="navBar-item">
                        <Link href="/projects">
                              <a className="navBar-link">Projects</a>
                         </Link>
                     </li>
                     <li className="navBar-item">
                         <Link href="/custom">
                             <a className="navBar-link">Custom</a>
                         </Link>
                     </li>
                     <li className="navBar-item">
                         <Link href="/contact">
                             <a className="navBar-link">Contact Us</a>
                         </Link>
                     </li>
                 </ul>
             </nav>
        </div>
    </div> 
       )}
       </>
    );
}

export default Navbar;