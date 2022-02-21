import Link from 'next/link'
import Head from 'next/head'


const Sitemap = () => {

    return (
        <>
        <Head>
            <link rel="icon" href="/favicon.png" /> 
            <title>BSC Enclosures | Sitemap </title>
            <meta name="description" content="BSC Enclosures | Sitemap"/>
            <meta name="keywords" content="BSC Enclosures | Sitemap | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

        <div className="container-fluid pt-5 mt-4 mb-5 pb-5">
            <div className="row justify-content-center">
                <div className="col-10 text-center">
                    <h2 className="sitemap-h2">
                        Sitemap
                    </h2>
                </div>
                <div className="col-10 text-left pt-5 mt-md-3">
                    <h4 className="list-h4">
                        Pages
                    </h4>
                    <ul className="list mt-4 pl-md-3 pl-3 sitemap-list">
                        <li className="item">
                            <Link href="/">
                                <a className="link-a">Home</a>
                            </Link>
                        </li>
                        <li className="item pt-md-2 pt-1">
                            <Link href="/wellness-station">
                                <a className="link-a">Wellness Station</a>
                            </Link>
                            <ul className="list">
                                <li className="item pt-md-2 pt-1">
                                    <Link href="/wellness-station-installation-instructions">
                                        <a className="link-a">Wellness Station Installation Instructions</a>
                                    </Link>
                                    <ul className="list">
                                        <li className="item pt-md-2 pt-1">
                                            <Link href="/wellness-station-installation-instructions">
                                                <a className="link-a">22in Install Instructions</a>
                                            </Link>
                                        </li>
                                        <li className="item pt-md-2 pt-1">
                                            <Link href="/wellness-station-installation-instructions">
                                                <a className="link-a">32in Installation Instructions</a>
                                            </Link>
                                        </li>
                                        <li className="item pt-md-3 pt-3">
                                            <Link href="/wellness-station-installation-instructions">
                                                <a className="link-a">Floor Graphics</a>
                                            </Link>
                                            <ul className="list">
                                                <li className="item pt-md-2 pt-1">
                                                    <Link href="/wellness-station-installation-instructions">
                                                        <a className="link-a">22in Floor Graphic</a>
                                                    </Link>
                                                </li>
                                                <li className="item pt-md-2 pt-1">
                                                    <Link href="/wellness-station-installation-instructions">
                                                        <a className="link-a">32in Floor Graphic</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="item pt-md-3 pt-3">
                                            <Link href="/wellness-station-installation-instructions">
                                                <a className="link-a">Player Setup</a>
                                            </Link>
                                            <ul className="list">
                                                <li className="item pt-md-2 pt-1">
                                                    <Link href="/wellness-station-installation-instructions">
                                                        <a className="link-a">Brightsign</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="item pt-md-3 pt-3">
                                    <Link href="/wellness-station-service">
                                        <a className="link-a">Wellness Station Service</a>
                                    </Link>
                                    <ul className="list">
                                        <li className="item pt-md-2 pt-1">
                                            <Link href="/wellness-station-service">
                                                 <a className="link-a">Firmware</a>
                                            </Link>
                                        </li>
                                        <li className="item pt-md-2 pt-1">
                                            <Link href="/wellness-station-service">
                                                 <a className="link-a">Top Cap Replacement</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="item pt-md-3 pt-3">
                            <Link href="/product-info">
                                <a className="link-a">Product Info</a>
                            </Link>
                            <ul className="list">
                                <li className="item pt-md-2 pt-1">
                                    <Link href="/product-info">
                                        <a className="link-a">Catalog and Cutsheets</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="item pt-md-3 pt-3">
                            <Link href="/projects">
                                <a className="link-a">Projects</a>
                            </Link>
                            <ul className="list">
                                <li className="item pt-md-2 pt-1">
                                    <Link href="/product-info">
                                        <a className="link-a">Images</a>
                                    </Link>
                                </li>
                                <li className="item pt-md-2 pt-1">
                                    <Link href="/product-info">
                                        <a className="link-a">Renderings</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="item pt-md-3 pt-3">
                            <Link href="/custom">
                                <a className="link-a">Custom</a>
                            </Link>
                            <ul className="list">
                                <li className="item pt-md-2 pt-1">
                                    <Link href="/custom">
                                        <a className="link-a">Custom Projects Checklist</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="col-10 text-left pt-5 mt-3">
                    <h4 className="list-h4">
                        Categories
                    </h4>
                    <ul className="list mt-4 pl-md-3 pt-3 sitemap-list">
                        <li className="item pt-md-2 pt-1">
                            <Link href="/wall-mount">
                                <a className="link-a">Wall Mount</a>
                            </Link>
                        </li>
                        
                        <li className="item pt-md-2 pt-1">
                            <Link href="/totems">
                                <a className="link-a">Totems</a>
                            </Link>
                        </li>
                        <li className="item pt-md-2 pt-1">
                            <Link href="/kiosks">
                                <a className="link-a">Angled Kiosks</a>
                            </Link>
                        </li>
                        <li className="item pt-md-2 pt-1">
                            <Link href="/outdoor">
                                <a className="link-a">Outdoor</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sitemap;