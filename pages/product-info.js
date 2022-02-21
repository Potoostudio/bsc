import Head from 'next/head'
import Link from 'next/link'

export default function Outdoor() {

    return (
    <>
        <Head>
            <link rel="icon" href="/favicon.png" /> 
            <title>BSC Enclosures | Project Information </title>
            <meta name="description" content="BSC Enclosures | Project Information"/>
            <meta name="keywords" content="BSC Enclosures | Project Information | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

        <div className="container-fluid product-container">
            <div className="row justify-content-center">
                <div className="col-md-12 col-12 pt-md-5 pb-md-4 pt-5 pb-4">
                    <h1 className="page-title text-center">
                        product info
                    </h1>
                </div>
            </div>
            <div className="row justify-content-center pt-md-4 mt-md-2 mx-lg-5 pb-5">
                <div className="col-lg-9 col-11">
                    <p className="page-content-p">
                        Under the Catalog and Cutsheets you will find downloadable pdfs of all our product offerings and related materials. 
                    </p>
                    <p className="page-content-p">
                        The R.A.S. System briefly explains our patent pending Rapid Access System that allows for quick service and a clean ( no hardware ) appearance. 
                    </p>
                    <p className="page-content-p">
                        The Embellishments page shows the options that are available for customizing our standard products to make them unique and fit into any environment. 
                    </p>
                </div>                
            </div>
            <div className="row justify-content-center pt-md-5 mt-md-5 mt-2 pb-4">
                <div className="col-md-4 col-xs-12">
                    <div className="elfsight-app-6e481fc4-a0f4-4e1d-ac90-c174a55382ae"></div>
                </div>
            </div>
        </div>
    </>
    )
}

