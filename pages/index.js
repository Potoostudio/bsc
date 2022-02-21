import Head from 'next/head'
// import styles from '../styles/Home.module.scss'
import ExmapleCarousel from '../comps/carousel'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container-fluid">
      <Head>
        <link rel="icon" href="/favicon.png" /> 
        <title>BSC Enclosures</title>
        <meta name="description" content="BSC Enclosures | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
        <meta name="keywords" content="BSC Enclosures | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
        <ExmapleCarousel/>
        <div className="container-fluid mt-5 mt-md-0 mt-sm-5 homePage-products-container">
          <div className="row justify-content-center pt-md-5 pb-md-5 mb-sm-5 mb-xs-5 mt-lg-5 homePage-products-row">
            <div className="col-md-12 homePage-products-col">
              <h3 className="new-products-h2 text-center">
                New Products
              </h3>
            </div>
          </div>
          <div className="row justify-content-around product-row px-md-5 mx-md-5">
            <div className="col-lg-3 col-md-6 col-sm-8 col-10 pt-3 pt-md-5 text-center">
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
                <Link href="/baseline-wall-surface-mount-outdoor" className="w-100">
                  <a className="img-link w-100">
                    <Image
                  src="/BSMO-Outdoor-Landscape-white.webp"
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
                <Link href="/baseline-wall-surface-mount-meeting-room">
                  <a className="img-link">
                    <Image
                  src="/BSM-M-white.webp"
                  width={392}
                  height={381}
                  alt="Baseline Totem"
                />
                  </a>
                </Link>
                
                <Link href="/baseline-wall-surface-mount-meeting-room">
                  <a className="product-title pt-md-4 pt-3">
                    Baseline Wall - Surface Mount - Meeting Room 10"- 24"
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-10 pt-5 text-center">
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
            <div className="col-lg-3 col-md-6 col-10 pt-md-5 mt-md-3 pt-5 text-center">
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
          </div>
        </div>
    </div>
  )
}
