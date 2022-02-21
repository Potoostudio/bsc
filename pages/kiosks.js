import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Kiosks() {

    return (
        <>
        <Head>
            <link rel="icon" href="/favicon.png" /> 
            <title>BSC Enclosures | Angled Kiosks </title>
            <meta name="description" content="BSC Enclosures | Angled Kiosks"/>
            <meta name="keywords" content="BSC Enclosures | Angled Kiosks | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

        <div className="container-fluid product-container">
            <div className="row mx-lg-5 px-lg-5 pt-5 justify-content-center">
                <div className="col-md-12 col-12 pt-md-5 pb-md-4">
                    <h1 className="page-title text-center">
                      Angled Kiosks
                    </h1>
                </div>
                <Image
                src="/Main-Angled-Back-Rendering.jpg"
                height="975px"
                width="1300px"
                alt="angled rendering"
                />
                <div className="col-lg-9 col-11 pt-md-5 px-4 pt-4">
                    <p className="page-content-p p-strong">
                      You’ll find angle back kiosks in lobbies and areas where people frequently require direction or guidance. The form factor is ideal and inviting for interaction. 
                    </p>
                    <p className="page-content-p pt-3">
                      Our kiosks are designed to meet ADA guidelines for usability by the widest range of audiences. They are also easily serviced and provide ample storage for players and other peripherals in the base. 
                    </p>
                    <p className="page-content-p pt-3">
                      Choose from a wide range of powdercoat finish and laminate combinations to create the perfect aesthetic to suit the location. Available in freestanding and bolt down options as well as for screen sizes 32" to 65" 
                    </p>
                </div>
            </div>
            <div className="row justify-content-center justify-content-start-mobile product-row px-md-5 mx-md-5 pt-md-5">
            <div className="col-lg-3 col-md-5 col-10 text-center">
              <div className="card">
                <Link href="/baseline-angle-back-kiosk">
                  <a className="img-link">
                    <Image
                    src="/Baseline-AB-White-.webp"
                    width={332}
                    height={322}
                    alt="Angled Kiosks"
                />
                  </a>
                </Link>
                
                <Link href="/baseline-angle-back-kiosk">
                  <a className="product-title pt-md-4 pt-3">
                    AB Series - Angled Back
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
    )
}