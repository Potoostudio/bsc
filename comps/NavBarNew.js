import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

class  Navbar extends React.Component  {

   
    state = {
        width: window.innerWidth,
    };
    
      componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
      
      componentDidUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }
      
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };
      

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;

        if (isMobile) {
            return (
                <div> Hello mobile</div>
            );
        } 
        else {
            return (
                <div className="navbar px-0 pt-md-0">
                <div className="container-fluid justify-content-center px-0">
                    <div className="row w-100 pb-md-3 d-none">
                        <div className="col-2">
                            <a href="tel:8882431194" className="phone-number">888.243.1194</a>
                        </div>
                    </div>
                <div className="row w-100 justify-content-center py-md-4 navbar-bg-blue">
                    <div className="col-md-5 text-center">
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
                                <a className="navBar-link">Angles Kiosks</a>
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
                                <a className="navBar-link">Product info</a>
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
            );
        }
    }
}

export default Navbar;
