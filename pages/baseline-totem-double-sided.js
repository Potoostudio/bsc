import React from 'react';
import Head from 'next/head'
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: '/BTDS-black.jpg',
      thumbnail: '/BTDS-black.jpg',
    },
    {
      original: '/BTDS-gray.jpg',
      thumbnail: '/BTDS-gray.jpg',
    },
    {
      original: '/BTDS-silver.jpg',
      thumbnail: '/BTDS-silver.jpg',
    },
    {
      original: '/BTDS-white.webp',
      thumbnail: '/BTDS-white.webp',
    },
    {
      original: '/BTDS-gold.jpg',
      thumbnail: '/BTDS-gold.jpg',
    },
    {
      original: '/BTDS-55.jpg',
      thumbnail: '/BTDS-55.jpg',
    },
  ];

class BTDS extends React.Component {

  setSelected(event) {
    console.log(event.target.value)
  }


  render() {
    return (
      <>
      <Head>
        <link rel="icon" href="/favicon.png" /> 
        <title>BSC Enclosures | Baseline Totem Double Sided</title>
        <meta name="description" content="BSC Enclosures | Baseline Totem Double Sided"/>
        <meta name="keywords" content="BSC Enclosures | Baseline Totem Double Sided | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <div className="container product-container m-w-1440px pt-md-5 mt-md-4">
        <div className="row product-row justify-content-around">
          <div className="col-lg-5 col-md-12  col-12 hight-images-col">
            <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false}/>
          </div>
          <div className="col-lg-5 col-11 pt-md-5 pt-4 product-info-col">
            <h2 className="product-custom-h2 pt-4">
              PTD Series - Double Sided
            </h2>
            <p className="product-p-light pt-4">
              SKU: <br/>
              PTD-[SIZE]-[Bolt-Down or Freestanding]
            </p>
            <p className="product-p-light pt-4">
              Availability:
            </p>
            <p className="product-p-light">
              Ships in 4-6 Weeks
            </p>
            <p className="product-p-light pt-4 border-bottom w-25 pb-md-1">
              Buy in bulk and save
            </p>
            <ul className="list bulk-save-list">
              <li className="item">
                Buy 5 - 9 and get 4% off 
              </li>
              <li className="item">
                Buy 10 or above and get 14% off 
              </li>
            </ul>
            <h4 className="product-custom-h4 description pt-5">
              Description
            </h4>
            <p className="product-p-light pt-3">
              Overview:
            </p>
            <p className="product-p-light pt-md-1 fw-400">
              Our PTD Series totems are designed for easy installation and service. Both faces are secured with plunge locks, and hinge open for easy access. Our unique “Lift-Off” style display bracket system is micro-adjustable and easy to use. Choose from Bolt-Down and Freestanding Plate options. This product will accomodate most brands and models of displays, as well as touch or non-touch.
            </p>
            <p className="product-p pt-4 fw-400">
              Features:
            </p>
            <ul className="list features-list">
              <li className="item pt-md-1">32" - 75" Display Sizes </li>
              <li className="item pt-md-1">Optional Touch (IR Or PCAP)</li>
              <li className="item pt-md-1">Easy Display and PC Access</li>
              <li className="item pt-md-1">Bolt-Down or Freestanding</li>
              <li className="item pt-md-1">Hardwired (Bolt-down) or Standard NEMA 110V Plug (Freestanding)</li>
              <li className="item pt-md-1">Made In The USA</li>
            </ul>
            <p className="product-p-light pt-pt-4">
              Special notes:
            </p>
            <p className="product-p-light pt-md-1">
              This enclosure includes a mount for a NUC style player, there is space for other form factor players as well.
            </p>
          </div>
        </div>
      </div>
      </>
    )
  }
    
}


export default BTDS;