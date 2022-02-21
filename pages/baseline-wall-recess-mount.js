import React from 'react';
import Head from 'next/head'
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: '/BRM-steel-Gray-gallery.jpg',
      thumbnail: '/BRM-steel-Gray-gallery.jpg',
    },
    {
      original: '/BRM-white-gallery.webp',
      thumbnail: '/BRM-white-gallery.webp',
    },
    {
      original: '/BRM-silver-gallery.jpg',
      thumbnail: '/BRM-silver-gallery.jpg',
    },
    {
      original: '/BRM-gold-gallery.jpg',
      thumbnail: '/BRM-gold-gallery.jpg',
    },
    {
      original: '/BRM-black-gallery.jpg',
      thumbnail: '/BRM-black-gallery.jpg',
    },
  ];

class BWRM extends React.Component {

  setSelected(event) {
    console.log(event.target.value)
  }

å
  render() {
    return (
      <>
      <Head>
        <link rel="icon" href="/favicon.png" /> 
        <title>BSC Enclosures | Baseline Wall Recess Mount</title>
        <meta name="description" content="BSC Enclosures | Baseline Wall Recess Mount"/>
        <meta name="keywords" content="BSC Enclosures | Baseline Wall Recess Mount | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <div className="container product-container m-w-1440px pt-lg-5 mt-lg-4">
        <div className="row product-row justify-content-around">
          <div className="col-lg-5 col-12 hight-images-col">
            <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false}/>
          </div>
          <div className="col-lg-5 col-11 pt-md-5 pt-4 product-info-col">
            <h2 className="product-custom-h2 pt-4">
              BRM SERIES - Recess Mount 32” - 75”
            </h2>
            <p className="product-p-light pt-lg-4 pt-4">
              SKU: <br/>
              BRM-[SIZE]-[Landscape or Portrait]-[Powdercoat or Wood/Metal Laminate]
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
            <p className="product-p-light pt-lg-3 pt-3">
              Overview:
            </p>
            <p className="product-p-light pt-md-1 fw-400">
              Our Recessed Mount enclosures like our Surface Mount enclosures are excellent for dressing up your displays to suit the environment as well as protect your investment and hide components and cabling. With a max protrusion of 3/4”, these enclosures boast the lowest profile available. Choose your powdercoat color and add embellishments like laminates, ADA plaques, graphics, icons, and lettering. Our enclosures can truly be unique and perfectly integrate with the environment. View our full catalog for available color options. This product will accomodate most brands and models of display as well as touch and non-touch.
            </p>
            <p className="product-p pt-lg-4 pt-4 fw-400">
              Features:
            </p>
            <ul className="list features-list">
              <li className="item pt-md-1">Landscape or Portrait</li>
              <li className="item pt-md-1">10in to 75in Display Size ( 10-24" Meeting room can be viewed here )</li>
              <li className="item pt-md-1">Non-Touch or Touch</li>
              <li className="item pt-md-1">RAS ( Rapid Access System )</li>
              <li className="item pt-md-1">Powdercoat Finish</li>
              <li className="item pt-md-1">Multiple Knockouts for Power and Data Location</li>
              <li className="item pt-md-1">All Steel Construction</li>
              <li className="item pt-md-1">Made In The USA</li>
            </ul>
            <p className="product-p-light pt-lg-4 pt-4">
              Special notes:
            </p>
            <p className="product-p-light pt-md-1">
              This enclosure includes a mount for a NUC style player, maximum player depth depends on the display size.
            </p>
          </div>
        </div>
      </div>
      </>
    )
  }
    
}


export default BWRM;