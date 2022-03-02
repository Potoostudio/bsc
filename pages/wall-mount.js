import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function WallMount() {

    return (
        <>
        <Head>
            <link rel="icon" href="/favicon.png" /> 
            <title>BSC Enclosures | Wall Mount </title>
            <meta name="description" content="BSC Enclosures | Wall Mount"/>
            <meta name="keywords" content="BSC Enclosures | Wall Mount | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

        <div className="container-fluid product-container">
            <div className="row mx-lg-5 mx-md-0 px-lg-5 px-md-0 pt-5 pt-sm-1 px-sm-0 mx-sm-0 justify-content-center">
                <div className="col-lg-12 col-md-10 col-xs-12 pt-md-5 pb-md-4">
                    <h1 className="page-title text-center">
                        Wall mount
                    </h1>
                </div>
                <div className="col-lg-9 col-md-11 col-11 pt-md-3 pt-3">
                    <p className="page-content-p">
                        Our wall mount enclosures are designed to encase new or existing displays and provide an integrated aesthetic to the environment while also protecting valuable components from being exposed to tampering. 
                    </p>
                    <p className="page-content-p">
                        They are available in Surface mount and Recessed versions as well as Baseline and Advantage.
                    </p>
                    <p className="page-content-p">
                        Recessed Mount: These enclosures require cutting into the wall, but provide a look similar to a picture frame, sticking off the wall no more than 3/4"
                    </p>
                </div>
                <div className="col-lg-7 col-md-10 col-12 pt-md-5 pt-5 text-center">
                    <Image
                        src="/wall-mounting.webp"
                        width={804}
                        height={400}
                        alt="Wall mounting image"
                    />
                </div>
            </div>
            <div className="row justify-content-around product-row px-md-5 mx-md-5 pt-md-5 mt-md-5">
            <div className="col-lg-3 col-md-6 col-10 pt-5 text-center">
              <div className="card">
                <Link href="/baseline-wall-recess-mount">
                  <a className="img-link">
                    <Image
                    src="/Baseline-wall-recess-mount.webp"
                    width={392}
                    height={381}
                    alt="Baseline Wall Recess Mount"
                />
                  </a>
                </Link>
                
                <Link href="/baseline-wall-recess-mount">
                  <a className="product-title pt-md-4 pt-3">
                    Baseline Wall - Recess Mount 32" - 75"
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-10 pt-5 text-center">
              <div className="card">
                <Link href="/baseline-wall-surface-mount-meeting-room" className="w-100">
                  <a className="img-link w-100">
                    <Image
                  src="/Baseline-wall-surface-mount.webp"
                  width={392}
                  height={381}
                  alt="Baseline Wall Surface mount meeting room"
                />
                  </a>
                </Link>
                
                <Link href="/baseline-wall-surface-mount-meeting-room">
                  <a className="product-title pt-md-4 pt-3">
                    Baseline Wall Surface Mount Meeting Room 10" - 24"
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-10 pt-5 text-center">
              <div className="card">
                <Link href="/baseline-wall-surface-mount">
                  <a className="img-link">
                    <Image
                  src="/Baseline-wall-surface-mount-32.webp"
                  width={392}
                  height={381}
                  alt="Baseline Totem"
                />
                  </a>
                </Link>
                
                <Link href="/baseline-wall-surface-mount">
                  <a className="product-title pt-md-4 pt-3">
                    Baseline Wall - surface mount 32" - 75"
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-10 pt-5 text-center">
              <div className="card">
                <Link href="/baseline-wall-surface-mount-outdoor">
                  <a className="img-link">
                    <Image
                  src="/Baseline-wall-surface-mount-outdoor.webp"
                  width={392}
                  height={381}
                  alt="baseline wall surface mount outdoor"
                />
                  </a>
                </Link>
                
                <Link href="/baseline-wall-surface-mount-outdoor">
                  <a className="product-title pt-md-4 pt-3">
                    Baseline wall - surface mount outdoor
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
    )
}