import React from 'react';
import Head from 'next/head'
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: '/BTDSO-gray.jpg',
      thumbnail: '/BTDSO-gray.jpg',
    },
    {
      original: '/BTDSO-white.webp',
      thumbnail: '/BTDSO-white.webp',
    },
    {
      original: '/BTDSO-black.jpg',
      thumbnail: '/BTDSO-black.jpg',
    },
    {
      original: '/BTDSO-gold.jpg',
      thumbnail: '/BTDSO-gold.jpg',
    },
    {
      original: '/BTDSO-silver.jpg',
      thumbnail: '/BTDSO-silver.jpg',
    },
    {
      original: '/BTDSO-49.jpg',
      thumbnail: '/BTDSO-49.jpg',
    },
    {
      original: '/BTDSO-55.jpg',
      thumbnail: '/BTDSO-55.jpg',
    },
  ];

class BTDSO extends React.Component {

  setSelected(event) {
    console.log(event.target.value)
  }


  render() {
    return (
      <>
      <Head>
        <link rel="icon" href="/favicon.png" /> 
        <title>BSC Enclosures | Baseline Totem Double Sided Outdoor</title>
        <meta name="description" content="BSC Enclosures | Baseline Totem Double Sided Outdoor"/>
        <meta name="keywords" content="BSC Enclosures | Baseline Totem Double Sided Outdoor | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <div className="container product-container m-w-1440px pt-lg-5 mt-lg-4">
        <div className="row product-row justify-content-around">
          <div className="col-lg-5 col-12 hight-images-col">
            <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false}/>
          </div>
          <div className="col-lg-5 col-11 pt-md-5 pt-4 product-info-col">
            <h2 className="product-custom-h2 pt-4">
              PTDO Series - Double Sided Outdoor
            </h2>
            <p className="product-p-light pt-4">
              SKU: <br/>
              PTDO-[Size]-[Display Model]
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
              Our PTDO Series totems are designed to house weatherproof outdoor rated displays. They are available for the LG 49XE4F and 55XE4F, and the Samsung OH46F and OH55F displays. Both faces are secured with plunge locks, and hinge open for easy access. Our unique “Lift-Off” style display bracket system is micro-adjustable and easy to use. These are available as Bolt-Down only. View our full catalog for available color options.
            </p>
            <p className="product-p pt-4 fw-400">
              Features:
            </p>
            <p className="product-p-light pt-3">
              Compatible Displays:
            </p>
            <ul className="list features-list">
              <li className="item pt-md-0">LG 49XE4F</li>
              <li className="item pt-md-1">LG 55XE4F</li>
              <li className="item pt-md-1">Samsung OH46F</li>
              <li className="item pt-md-1">Samsung OH55F</li>
            </ul>
            <ul className="list features-list">
              <li className="item pt-md-1">Available with TSI Touch IR overlay</li>
              <li className="item pt-md-1">Weather Mitigating Design</li>
              <li className="item pt-md-1">Marine Grade Powdercoat Option</li>
              <li className="item pt-md-1">Steel Contruction</li>
              <li className="item pt-md-1">“Lift-Off” display mount brackets for ease of installation</li>
              <li className="item pt-md-1">Plunge Lock Security</li>
              <li className="item pt-md-1">Made In The USA</li>
            </ul>
            <p className="product-p-light pt-4">
              Special notes:
            </p>
            <p className="product-p-light pt-md-1">
              This enclosure is not weatherproof; it is designed to mitigate the effects of excess water and debris entering the enclosure. It is recommended to remotely mount media players for maximum protection. Third-party weatherproof enclosures can be recommended upon request.
            </p>
          </div>
        </div>
      </div>
      </>
    )
  }
    
}


export default BTDSO;