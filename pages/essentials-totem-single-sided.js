import Head from 'next/head'
import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: '/ETSS-white.webp',
      thumbnail: '/ETSS-white.webp',
    },
    {
      original: '/ETSS-black.webp',
      thumbnail: '/ETSS-black.webp',
    },
    {
      original: '/ETSS-gold.jpg',
      thumbnail: '/ETSS-gold.jpg',
    },
    {
      original: '/ETSS-silver.jpg',
      thumbnail: '/ETSS-silver.jpg',
    },
    {
      original: '/ETSS-49.jpg',
      thumbnail: '/ETSS-49.jpg',
    },
    {
      original: '/ETSS-55.jpg',
      thumbnail: '/ETSS-55.jpg',
    },
  ];

class ETSS extends React.Component {

  setSelected(event) {
    console.log(event.target.value)
  }


  render() {
    return (
      <>
        <Head>
            <link rel="icon" href="/favicon.png" /> 
            <title>BSC Enclosures | Essentials Totem Single Sided </title>
            <meta name="description" content="BSC Enclosures | Essentials Totem Single Sided"/>
            <meta name="keywords" content="BSC Enclosures | Essentials Totem Single Sided | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

      <div className="container product-container m-w-1440px pt-lg-5 mt-lg-4">
        <div className="row product-row justify-content-around">
          <div className="col-lg-5 col-12 hight-images-col">
            <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false}/>
          </div>
          <div className="col-lg-5 col-11 pt-md-5 pt-4 product-info-col">
            <h2 className="product-custom-h2">
              EPT Series ( Display Included )
            </h2>
            <p className="product-p-light pt-4">
              SKU: <br/>
              EPT-[Size]-[Display Model]-[Touch or Non]
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
              Our Essentials totem is a low cost, full value solution. The essentials line is optimized for the LG UH5/7F Series in 4k resolution, and the optional TSI Touch IR overlay. These displays are wifi enabled with WEBOS; plug and play your content (not provided) right away. A NUC formfactor player may also be mounted to run any content platform.  View our full catalog for available color options.  Laminate overlay embellishments are available, just like our baseline products, to add that extra touch that will make these kiosks pop in your environment.
            </p>
            <p className="product-p pt-4 fw-400">
              Features:
            </p>
            <p className="product-p-light pt-3">
              Available Displays:
            </p>
            <ul className="list features-list">
              <li className="item pt-md-0">LG 49UH5F</li>
              <li className="item pt-md-1">LG 49UH7F</li>
              <li className="item pt-md-1">LG 55UH5F</li>
              <li className="item pt-md-1">LG 55UH7F</li>
            </ul>
            <ul className="list features-list pt-md-3">
              <li className="item pt-md-0">Optional Touch Overlay (IR)</li>
              <li className="item pt-md-1">Web OS Compatible</li>
              <li className="item pt-md-1">Slim 4-3/4" Depth</li>
              <li className="item pt-md-1">Easy Display and PC Access</li>
              <li className="item pt-md-1">Freestanding</li>
              <li className="item pt-md-1">Standard Plug</li>
              <li className="item pt-md-1">Made In The USA</li>
            </ul>
            <p className="product-p-light pt-4">
              Special notes:
            </p>
            <p className="product-p-light pt-md-1">
              This enclosure includes a mount for a NUC style player, there is space for other form factor players as well. We recommend bolting this totem down for optimum stability.
            </p>
          </div>
        </div>
      </div>
      </>
    )
  }
    
}


export default ETSS;