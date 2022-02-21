import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Outdoor() {

    return (
        <>
        <Head>
            <link rel="icon" href="/favicon.png" /> 
            <title>BSC Enclosures | Outdoor Kiosks </title>
            <meta name="description" content="BSC Enclosures | Outdoor Kiosks"/>
            <meta name="keywords" content="BSC Enclosures | Outdoor Kiosks | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

        <div className="container-fluid product-container">
            <div className="row mx-lg-5 px-lg-5 justify-content-center">
                <div className="col-lg-12 col-md-11 col-12 pt-md-5 pb-md-4 pt-5 pb-3">
                    <h1 className="page-title text-center">
                        Outdoor
                    </h1>
                </div>
                <div className="col-lg-9 col-md-11 col-11 pt-lg-3 pt-2">
                    <p className="page-content-p p-strong">
                        Outdoor displays are excellent for grabbing the attention customers and prospective customers by providing dynamic or interactive content to draw them in. 
                    </p>
                    <p className="page-content-p pt-2 pt-md-0">
                        We design our enclosures in a variety of form factors, including: Wall mounted units and totems (monuments). They are designed to enclose a weather rated display like the LG 55XE4f or the Samsung OH55F that both have an IP56 rating. They can also house a player as well. 
                    </p>
                    <p className="page-content-p pt-2 pt-md-0">
                        Our enclosures are designed to be water resistant by protecting from direct rain exposure and implement systems to divert water from entering the enclosure, but are not waterproof themselves. They are also designed to meet the requirements of the individual display manufactures for proper airflow to ensure the displays stay within normal operating temperatures. 
                    </p>
                </div>
            </div>
            <div className="row justify-content-around product-row px-md-5 mx-md-5 pt-md-5 pt-5">
            <div className="col-lg-3 col-md-6 col-10 pt-3 pt-md-5 text-center">
              <div className="card">
                <Link href="/baseline-totem-double-sided-outdoor">
                  <a className="img-link">
                    <Image
                    src="/Baseline-DSO-White.jpg"
                    width={392}
                    height={381}
                    alt="Baseline Totem"
                />
                  </a>
                </Link>
                
                <Link href="/baseline-totem-double-sided-outdoor">
                  <a className="product-title pt-md-4 pt-3">
                    Baseline Totem - Double Sided Outdoor
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-10 pt-5 text-center">
              <div className="card">
                <Link href="/baseline-totem-single-sided-outdoor" className="w-100">
                  <a className="img-link w-100">
                    <Image
                  src="/Baseline-SSO-White.jpg"
                  width={392}
                  height={381}
                  alt="Baseline Totem"
                />
                  </a>
                </Link>
                
                <Link href="/baseline-totem-single-sided-outdoor">
                  <a className="product-title pt-md-4">
                    Baseline Totem - Single Sided Outdoor
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-10 pt-5 text-center">
              <div className="card">
                <Link href="/baseline-wall-surface-mount-outdoor">
                  <a className="img-link">
                    <Image
                  src="/BSMO-Outdoor-Landscape.webp"
                  width={392}
                  height={381}
                  alt="Baseline Totem"
                />
                  </a>
                </Link>
                
                <Link href="/baseline-wall-surface-mount-outdoor">
                  <a className="product-title pt-md-4 pt-3">
                    Baseline Wall - Surface Mount Outdoor
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-10 pt-5 text-center">
              <div className="card">
                <Link href="/qsr-enclosures">
                  <a className="img-link">
                    <Image
                  src="/1x3-qsr.108.webp"
                  width={392}
                  height={381}
                  alt="Baseline Totem"
                />
                  </a>
                </Link>
                
                <Link href="/qsr-enclosures">
                  <a className="product-title pt-md-4 pt-3">
                    Essentials QSR Enclosure
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center pt-md-5 mt-md-5 mb-md-5 mt-5 pt-5 mb-4">
              <div className="col-lg-5 col-md-6 col-12 pt-md-5">
                <div className="elfsight-app-abe77858-f086-4ad2-8715-3a48b8a69db8"></div>
              </div>
          </div>
        </div>
    </>
    )
}

