import React from 'react';
import Head from 'next/head'
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: '/BABK-black.jpg',
      thumbnail: '/BABK-black.jpg',
    },
    {
      original: '/BABK-silver.jpg',
      thumbnail: '/BABK-silver.jpg',
    },
    {
      original: '/BABK-white.jpg',
      thumbnail: '/BABK-white.jpg',
    },
    {
      original: '/BABK-gray.jpg',
      thumbnail: '/BABK-gray.jpg',
    },
    {
      original: '/BABK-gold.jpg',
      thumbnail: '/BABK-gold.jpg',
    },
    {
      original: '/BABK-49.jpg',
      thumbnail: '/BABK-49.jpg',
    },
    {
      original: '/BABK-55.jpg',
      thumbnail: '/BABK-55.jpg',
    },
    {
      original: '/BABK-65.jpg',
      thumbnail: '/BABK-65.jpg',
    },
  ];

class BABK extends React.Component {

  setSelected(event) {
    console.log(event.target.value)
  }


  render() {
    return (
      <>
      <Head>
        <link rel="icon" href="/favicon.png" /> 
        <title>BSC Enclosures | Baseline Angle Back Kiosk</title>
        <meta name="description" content="BSC Enclosures | Baseline Angle Back Kiosk"/>
        <meta name="keywords" content="BSC Enclosures | Baseline Angle Back Kiosk | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <div className="container product-container m-w-1440px pt-lg-5 mt-lg-4">
        <div className="row product-row justify-content-around">
          <div className="col-lg-5 col-12 hight-images-col">
            <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false}/>
          </div>
          <div className="col-lg-5 col-11 pt-md-5 pt-4 product-info-col">
            <h2 className="product-custom-h2">
                AB Series - Angled Back
            </h2>
            <p className="product-p-light pt-4">
              SKU: <br/>
              AB[SIZE]-[Bolt-Down or Freestanding]
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
                Buy 5 - 9 and get 5% off 
              </li>
              <li className="item">
                Buy 10 or above and get 18% off 
              </li>
            </ul>
            <h4 className="product-custom-h4 description pt-5">
              Description
            </h4>
            <p className="product-p-light pt-3">
              Overview:
            </p>
            <p className="product-p-light pt-md-1 fw-400">
            Our AB Series kiosks are designed for easy installation and service. Features a unique gas-spring assisted display mounting system. Choose from Bolt-Down and Freestanding Plate options. This product will accomodate most brands and models of displays, as well as touch or non-touch.
            </p>
            <p className="product-p pt-4 fw-400">
              Features:
            </p>
            <ul className="list features-list">
              <li className="item pt-md-1">43" - 65" Displays</li>
              <li className="item pt-md-1">Touch or Non-Touch</li>
              <li className="item pt-md-1">ADA Compliant</li>
              <li className="item pt-md-1">Easy Service Access</li>
              <li className="item pt-md-1">All Steel Construction</li>
              <li className="item pt-md-1">Bolt Down or Freestanding</li>
              <li className="item pt-md-1">Hardwired (Bolt-down) or Standard NEMA 110V Plug (Freestanding)</li>
              <li className="item pt-md-1">Made In The USA</li>
            </ul>
            <p className="product-p-light pt-4">
              Special notes:
            </p>
            <p className="product-p-light pt-md-1">
              This enclosure includes a mount for a NUC style player.
            </p>
          </div>
        </div>
      </div>
      </>
    )
  }
    
}


export default BABK;