import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function WellnessStationService() {

    return (
        <>
        <Head>
            <link rel="icon" href="/favicon.png" /> 
            <title>BSC Enclosures | Wellness Station Service </title>
            <meta name="description" content="BSC Enclosures | Wellness Station Service"/>
            <meta name="keywords" content="BSC Enclosures | Wellness Station Service | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        </Head>
        <div className="container-fluid product-container">
            <div className="row mx-md-5 px-md-5">
                <div className="col-md-12 col-xs-12 pt-md-5 pb-md-4">
                    <h1 className="page-title text-center">
                        Wellness Station Service
                    </h1>
                </div>
            </div>
            <div className="row justify-content-center product-row px-md-5 mx-md-5 pt-md-5">
                <div className="col-md-10 col-xs-11 text-center">
                    <Link href="https://www.dropbox.com/sh/bizggl75ggvieq7/AAAuT0b669vdSCsBW5mR4oqya?dl=0">
                        <a className="link-a btn">
                            Firmware
                        </a>
                    </Link>
                </div>
            </div>
            <div className="row justify-content-around product-row px-md-5 mx-md-5 pt-md-5 mt-md-5">
                <div className="col-md-10 col-xs-10 text-center pb-md-5 pt-md-5">
                    <h3 className="custom-h3">
                        Floor Graphics
                    </h3>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-11">
                    <h5 className="custom-h3 text-center pb-md-4">
                        22in Floor Graphic
                    </h5>
                    <div className="elfsight-app-a7f8b46a-4f19-4868-9aeb-f25814b3bde7"></div>
                </div>
            </div>
        </div>
    </>
    )
}

