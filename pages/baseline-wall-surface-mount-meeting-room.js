import React from 'react';
import Head from 'next/head'
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: '/BWSMMR-black.jpg',
      thumbnail: '/BWSMMR-black.jpg',
    },
    {
      original: '/BWSMMR-gray.jpg',
      thumbnail: '/BWSMMR-gray.jpg',
    },
    {
      original: '/BWSMMR-silver.jpg',
      thumbnail: '/BWSMMR-silver.jpg',
    },
    {
      original: '/BWSMMR-white.jpg',
      thumbnail: '/BWSMMR-white.jpg',
    },
    {
      original: '/BWSMMR-gold.jpg',
      thumbnail: '/BWSMMR-gold.jpg',
    },
    {
      original: '/BWSMMR-wall-mount.jpg',
      thumbnail: '/BWSMMR-wall-mount.jpg',
    },
    {
      original: '/BWSMMR-10.jpg',
      thumbnail: '/BWSMMR-10.jpg',
    },
    {
      original: '/BWSMMR-15.jpg',
      thumbnail: '/BWSMMR-15.jpg',
    },
    {
      original: '/BWSMMR-19.jpg',
      thumbnail: '/BWSMMR-19.jpg',
    },
    {
      original: '/BWSMMR-22.jpg',
      thumbnail: '/BWSMMR-22.jpg',
    },
    {
      original: '/BWSMMR-24.jpg',
      thumbnail: '/BWSMMR-24.jpg',
    },
  ];

class BWSMMR extends React.Component {

  setSelected(event) {
    console.log(event.target.value)
  }


  render() {
    return (
      <>
      <Head>
        <link rel="icon" href="/favicon.png" /> 
        <title>BSC Enclosures | Baseline Wall Surface Mount Meeting Room</title>
        <meta name="description" content="BSC Enclosures | Baseline Wall Surface Mount Meeting Room"/>
        <meta name="keywords" content="BSC Enclosures | Baseline Wall Surface Mount Meeting Room | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <div className="container product-container m-w-1440px pt-md-5 mt-md-4">
        <div className="row product-row justify-content-around">
          <div className="col-lg-5 col-12 hight-images-col">
            <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false}/>
          </div>
          <div className="col-lg-5 col-11 pt-md-5 pt-4 product-info-col">
            <h2 className="product-custom-h2 pt-4">
              BSM Series - Surface Mount - Meeting Room 10"- 24"
            </h2>
            <p className="product-p-light pt-lg-4 pt-4">
              SKU: <br/>
              BSM-[SIZE]-[Landscape or Portrait]-[Powdercoat or Wood/Metal Laminate]-[ADA]
            </p>
            <p className="product-p-light pt-lg-4 pt-4">
              Availability:
            </p>
            <p className="product-p-light">
              Ships in 4-6 Weeks
            </p>
            <p className="product-p-light pt-lg-4 pt-4 border-bottom w-25 pb-md-1">
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
            <h4 className="product-custom-h4 description pt-lg-5 pt-4">
              Description
            </h4>
            <p className="product-p-light pt-3">
              Overview:
            </p>
            <p className="product-p-light pt-md-1 fw-400">
              Our Surface Mount enclosures are excellent for dressing up your displays to suit the environment as well as protect your investment and hide components and cabling. Choose your powdercoat color and add embellishments like laminates, ADA plaques, graphics, icons, and lettering. Our enclosures can truly be unique and perfectly integrate with the environment. View our full catalog for available color options. This product will accomodate most brands and models of displays as well as touch and non-touch.
            </p>
            <p className="product-p pt-lg-4 pt-4 fw-400">
              Features:
            </p>
            <ul className="list features-list">
              <li className="item pt-md-1">Landscape or Portrait</li>
              <li className="item pt-md-1">10" to 24" Display Size (32"–75" Surface mounts can be viewed here)</li>
              <li className="item pt-md-1">Touch or Non-Touch </li>
              <li className="item pt-md-1">RAS ( Rapid Access System )</li>
              <li className="item pt-md-1">Powdercoat Finish</li>
              <li className="item pt-md-1">Multiple Knockouts for Power and Data Location</li>
              <li className="item pt-md-1">All Steel Construction</li>
              <li className="item pt-md-1">Made In The USA</li>
            </ul>
          </div>
        </div>
      </div>
      </>
    )
  }
    
}


export default BWSMMR;