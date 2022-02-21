import Head from 'next/head'

export default function Projects() {

    return (
    <>
        <Head>
            <link rel="icon" href="/favicon.png" /> 
            <title>BSC Enclosures | Projects </title>
            <meta name="description" content="BSC Enclosures | Projects"/>
            <meta name="keywords" content="BSC Enclosures | Projects | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

        <div className="container-fluid product-container">
            <div className="row justify-content-center">
                <div className="col-md-12 col-xs-12 pt-md-5 pb-md-4 pt-5 pb-4">
                    <h1 className="page-title text-center">
                        projects
                    </h1>
                </div>
            </div>
            <div className="row justify-content-center pt-md-4 mt-md-2 mx-md-5">
                <div className="col-md-8 col-xs-12">
                    <iframe src="https://www.powr.io/media-gallery/u/f7b546e4_1566072564#platform=bigcommerce&url=https%3A%2F%2Fbscenclosures.com%2Fprojects%2F"
                        powrindex="0"  webkitallowfullscreen="" 
                        allowFullScreen="" width="100%" height="5708px" frameBorder="0"
                    > 
                    </iframe>
                </div>
            </div>
            <div className="row justify-content-center pt-md-4 mt-md-2 mx-md-5">
                <div className="col-md-8 col-xs-12">
                    <iframe src="https://www.powr.io/media-gallery/u/1f997f48_1566155502#platform=bigcommerce&url=https%3A%2F%2Fbscenclosures.com%2Fcustom%2F"
                        powrindex="0"  webkitallowfullscreen="" 
                        allowFullScreen="" width="100%" height="2176px" frameBorder="0" 
                    > 
                    </iframe>
                </div>
            </div>
        </div>
    </>
    )
}