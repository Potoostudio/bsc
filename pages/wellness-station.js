import Head from 'next/head'
import Link from 'next/link'

export default function WellnessStation() {

    return (
    <>
        <Head>
            <link rel="icon" href="/favicon.png" /> 
            <title>BSC Enclosures | Wellness Station </title>
            <meta name="description" content="BSC Enclosures | Wellness Station"/>
            <meta name="keywords" content="BSC Enclosures | Wellness Station | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        </Head>
        <div className="container-fluid product-container">
            <div className="row justify-content-center pt-5 pt-md-0">
                <div className="col-md-12 col-xs-12 pt-md-5 pb-md-4">
                    <h1 className="page-title text-center">
                        Wellness Station
                    </h1>
                </div>
            </div>
            <div className="row justify-content-center mt-2 pt-4 text-center mx-auto">
                <div className="col-lg-8 col-md-10 col-11">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-11 col-12">
                            <Link href="/wellness-station-installation-instructions">
                                <a className="link-a btn">
                                    Wellness Station installation instructions 
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-5 col-md-11 col-12 pt-md-5 pt-5 pt-lg-0">
                            <Link href="/wellness-station-service">
                                <a className="link-a btn">
                                    wellness station service
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center pt-3 pt-md-5 mt-5">
                <div className="col-md-4 col-11 text-center">
                    <div className="elfsight-app-b548ebf9-3095-4f7a-9b8a-7caf41c137f7"></div>
                </div>
            </div>
            <div className="row justify-content-center pt-md-5 mt-md-5 mt-5 pt-4 video-row">
                <div className="col-lg-5 col-md-9 col-11 text-right text-center-mobile">
                    <iframe src="https://www.youtube.com/embed/ij8wryNWtAY" allowFullScreen="" width="560" 
                    height="315" frameBorder="0"/>
                </div>
                <div className="col-lg-5 col-md-9 col-11 text-left text-center-mobile pt-4 pt-lg-0">
                    <iframe src="https://www.youtube.com/embed/fnZOVa_TbH0" allowFullScreen="" width="560" 
                    height="315" frameBorder="0"/>
                </div>
            </div>
        </div>
    </>
    )
}
