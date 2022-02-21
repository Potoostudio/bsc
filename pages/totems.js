import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Totmes() {

    return (
        <>
        <Head>
            <link rel="icon" href="/favicon.png" /> 
            <title>BSC Enclosures | Totems </title>
            <meta name="description" content="BSC Enclosures | Totems"/>
            <meta name="keywords" content="BSC Enclosures | Totems | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

        <div className="container-fluid product-container">
            <div className="row mx-lg-5 px-lg-5 justify-content-center">
                <div className="col-lg-12 col-md-11 col-12 pt-md-5 pb-md-4 pt-5 pb-3">
                    <h1 className="page-title text-center">
                        Totems
                    </h1>
                </div>
                <div className="col-lg-9 col-md-11 col-11 pt-lg-3 pt-2">
                    <p className="page-content-p p-strong">
                        Our Totem kiosks provide an excellent solution for driving content to your audience.
                    </p>
                    <p className="page-content-p pt-2 pt-md-0">
                        They are available in single or double sided format as a standard and fit a wide range of display sizes and manufacturers as well as with or without touch overlays. The kiosks can either be bolted down and hardwired through the floor or freestanding with a plug out the back or side for plugging in to an existing outlet.  Inside the enclosure offers a standard 2 gang outlet to plug in all your devices and special mounting for players and accessories. Both the front and back doors hinge open for easy service access and are cam locked for theft prevention. 
                    </p>
                    <p className="page-content-p pt-2 pt-md-0">
                    Pick from a wide variety of powdercoat colors and finishes, as well as laminates and embellishments, to customize each kiosk and make it unique to your users and their requirements. 
                    </p>
                </div>
            </div>
            <div className="row justify-content-around product-row px-md-5 mx-md-5 pt-md-5 pt-5">
            <div className="col-lg-3 col-md-6 col-10 pt-3 pt-lg-5 pt-md-5 text-center">
              <div className="card">
                <Link href="/baseline-totem-double-sided">
                  <a className="img-link">
                    <Image
                    src="/Baseline-DS-White.webp"
                    width={392}
                    height={381}
                    alt="Baseline Totem"
                />
                  </a>
                </Link>
                
                <Link href="/baseline-totem-double-sided">
                  <a className="product-title pt-md-4 pt-3">
                  Baseline Totem - Double Sided
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-10 pt-5 text-center">
              <div className="card">
                <Link href="/baseline-totem-double-sided-outdoor" className="w-100">
                  <a className="img-link w-100">
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
                <Link href="/baseline-totem-single-sided">
                  <a className="img-link">
                    <Image
                  src="/Baseline-SS-white.webp"
                  width={392}
                  height={381}
                  alt="Baseline Totem"
                />
                  </a>
                </Link>
                
                <Link href="/baseline-totem-single-sided">
                  <a className="product-title pt-md-4 pt-3">
                    Baseline Totem - Single Sided
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-10 pt-5 text-center">
              <div className="card">
                <Link href="/baseline-totem-single-sided-outdoor">
                  <a className="img-link">
                    <Image
                  src="/Baseline-SSO-White.jpg"
                  width={392}
                  height={381}
                  alt="Baseline Totem"
                />
                  </a>
                </Link>
                
                <Link href="/baseline-totem-single-sided-outdoor">
                  <a className="product-title pt-md-4 pt-3">
                    Baseline Totem - Single Sided Outdoor
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-10 pt-md-5 mt-md-3 pt-5 text-center">
              <div className="card">
                <Link href="/essentials-totem-single-sided">
                  <a className="img-link">
                    <Image
                  src="/Essentials-White-.jpg"
                  width={392}
                  height={381}
                  alt="Baseline Totem"
                />
                  </a>
                </Link>
                
                <Link href="/essentials-totem-single-sided">
                  <a className="product-title pt-md-4 pt-3">
                    Essentials Totem - ( Display Included )
                  </a>
                </Link>
              </div>
            </div>
          </div>

        </div>
    </>
    )
}