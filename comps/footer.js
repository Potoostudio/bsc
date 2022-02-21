import Link from 'next/link'

const Footer = () => {

    return (
        <div className="container-fluid footer-container">
            <div className="row px-lg-5 mx-lg-5 justify-content-around px-md-4">
                <div className="col-lg-3 col-md-3 col-5">
                    <h5 className="footer-h5-title">
                        Navigate
                    </h5>
                    <ul className="footer-list ml-0 pl-0 pt-md-2">
                        <li className="footer-item">
                            <Link href="/patent">
                                <a className="footer-item-a">
                                    Patent
                                </a>
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link href="/wellness-station">
                                <a className="footer-item-a">
                                    Wellness Station
                                </a>
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link href="/product-info">
                                <a className="footer-item-a">
                                    Products Info
                                </a>
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link href="/projects">
                                <a className="footer-item-a">
                                    Projects
                                </a>
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link href="/custom">
                                <a className="footer-item-a">
                                    custom
                                </a>
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link href="/contact">
                                <a className="footer-item-a">
                                    Contact us
                                </a>
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link href="/Sitemap">
                                <a className="footer-item-a">
                                    sitemap
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-3 col-5">
                    <h5 className="footer-h5-title">
                        Categories
                    </h5>
                    <ul className="footer-list ml-0 pl-0 pt-md-2">
                        <li className="footer-item">
                            <Link href="/wall-mount">
                                <a className="footer-item-a">
                                    Wall Mount
                                </a>
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link href="/totems">
                                <a className="footer-item-a">
                                    Totems
                                </a>
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link href="/kiosks">
                                <a className="footer-item-a">
                                    Angled kiosks
                                </a>
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link href="/outdoor">
                                <a className="footer-item-a">
                                    outdoor
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-5 col-11 pt-4 pt-md-0">
                    <h5 className="footer-h5-title">
                        Info
                    </h5>
                    <ul className="footer-list ml-0 pl-0 pt-md-2">
                        <li className="footer-item">
                            <p className="address-p pb-0">
                                11821 Huron St
                                Westminster, CO 80234
                            </p>
                        </li>
                        <li className="footer-item">
                            <Link href="tel:888.243.1194">
                                <a className="footer-item-a">
                                    Call us at 1 (888) 243-1194
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row px-lg-5 mx-lg-5 copy-right-row pt-5">
                <div className="col-lg-2 col-md-12 col-12">
                    <p className="footer-copy-rights text-center">
                        © 2022 BSC Enclosures
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;