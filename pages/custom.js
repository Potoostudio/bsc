import React, {useState} from 'react';
import Head from 'next/head'

export default function Custom() {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    }

    return (
    <>
        <Head>
            <link rel="icon" href="/favicon.png" /> 
            <title>BSC Enclosures | Custom Project </title>
            <meta name="description" content="BSC Enclosures | Custom Project"/>
            <meta name="keywords" content="BSC Enclosures | Custom Project | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

        <div className="container-fluid product-container">
            <div className="row">
                <div className="col-md-12 col-12 pt-md-5 pb-md-4 pt-5 mt-3">
                    <h1 className="page-title text-center">
                        Custom
                    </h1>
                </div>
            </div>
            <div className="row justify-content-center pt-md-4 mt-md-2 mx-md-5 pt-4">
                <div className="col-lg-12 col-md-12 col-10 text-center py-md-5 p">
                    <button className="btn link-a" onClick={handleToggle}>
                        Custom Projects Checklist
                    </button>
                </div>
                <div className={isActive ? "hide" : "col-md-4 col-11 py-md-5 mb-md-4"}>
                    <p className="page-content-p py-md-3 py-3">
                        Projects Checklist
                    </p>
                    <div className="elfsight-app-7024d0fb-d1eb-45b9-8246-02bc34869358 eapps-widget eapps-widget-show-toolbar"></div>
                </div>
                <div className="col-md-4 col-11 py-md-5 py-5">
                    <p className="page-content-p py-md-3 py-3">
                        Examples of Successful Custom Projects:
                    </p>
                    <div className="elfsight-app-c3dec1b2-af3d-47c6-b09b-4d690bb166ef"></div>
                </div>
            </div>
            <div className="row justify-content-center pt-md-4 mt-md-2 mx-md-5 ">
                <div className="col-lg-7 col-11">
                    <h5 className="h5-custom pt-md-5 pt-2">
                        Download our custom projects checklist here to get started working with us: Custom Checklist 
                    </h5>
                    <h6 className="h6-custom pt-4">
                        BSC Enclosures is your one stop enclosure supplier:
                    </h6>
                    <p className="page-content-p pt-3">
                        If our standard products don't suit your needs, we offer embellishments to customize them, and if that still doesn't suit your needs we offer full custom solutions. 
                    </p>
                    <h6 className="h6-custom pt-4">
                        How custom works:
                    </h6>
                    <p className="page-content-p pt-3">
                        Maybe you already have a concept, we can take it and turn it into a producible assembly. 
                    </p>
                    <p className="pt-4">
                        Our Engineers will:
                    </p>
                    <ul className="list pt-md-3 pl-3 pt-1">
                        <li className="item">
                            Design for manufacturability
                        </li>
                        <li className="item">
                            Value engineer
                        </li>
                        <li className="item">
                            Make functional and aesthetic recommendations
                        </li>
                        <li className="item">
                            Create an easy to install and service solution
                        </li>
                    </ul>
                    <p className="page-content-p pt-4">
                        If you don't already have a solutions, don't worry. We have industrial designers in house to listen to your needs. 
                    </p>
                    <p className="pt-4">
                        Our designers will:
                    </p>
                    <ul className="list pt-md-3 pl-3 pt-1">
                        <li className="item">
                            Discover project requirements: Displays and orientation, additional components, end use and environment
                        </li>
                        <li className="item">
                            Develop concepts for you and or your client to approve
                        </li>
                        <li className="item">
                            Provide renderings and shop drawings for final review
                        </li>
                    </ul>
                    <h6 className="h6-custom pt-4">
                        Equipment we have to create your perfect solution:
                    </h6>
                    <p className="page-content-p pt-3">
                        Our facility houses some of the most state of the art equipment as well as the best fabricators and welders in the industry.
                    </p>
                    <p className="page-content-p">
                        Some of our equipment includes: 6’x12’ Fiber Laser that can cut up to ½” Stainless Steel, a Robotic Welding Cell ( Think car manufacturing ), Multiple CNC press brakes: Including one with a
                        14’ capacity to bend any job, even our chop saws are cnc controlled which ensures every part is
                        accurate and efficiently produced.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center pt-lg-4 mt-lg-2 mx-lg-5 video-row py-4 ">
                <div className="col-lg-8 col-md-12 col-11 text-center">
                    <iframe src="https://player.vimeo.com/video/358286867"
                        width="800" height="659" align="top" 
                         frameBorder="0" className="w-100"
                    > 
                    </iframe>
                </div>
            </div>
            <div className="row justify-content-center pt-md-4 mt-md-2 mx-md-5">
                <div className="col-md-8 col-11">
                    <iframe src="https://www.powr.io/media-gallery/u/f7b546e4_1566072564#platform=bigcommerce&url=https%3A%2F%2Fbscenclosures.com%2Fprojects%2F"
                        powrindex="0"  webkitallowfullscreen="" 
                        allowFullScreen="" width="100%" height="5708px" frameBorder="0"
                    > 
                    </iframe>
                </div>
            </div>
        </div>
    </>
    )
}

