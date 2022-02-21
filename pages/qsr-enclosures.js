import Head from 'next/head'
import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: '/QSRE-1.webp',
      thumbnail: 'QSRE-1.webp',
    },
    {
      original: 'QSRE-2.png',
      thumbnail: 'QSRE-2.png',
    },
    {
      original: '/QSRE-3.png',
      thumbnail: '/QSRE-3.png',
    },
    {
      original: '/QSRE-4.png',
      thumbnail: '/QSRE-4.png',
    },
    {
      original: '/QSRE-5.png',
      thumbnail: '/QSRE-5.png',
    }
  ];

class QSRE extends React.Component {

  setSelected(event) {
    console.log(event.target.value)
  }


  render() {
    return (
      <>
      <Head>
            <link rel="icon" href="/favicon.png" /> 
            <title>BSC Enclosures | QSR Enclosures </title>
            <meta name="description" content="BSC Enclosures | QSR Enclosures"/>
            <meta name="keywords" content="BSC Enclosures | QSR Enclosures | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <div className="container product-container m-w-1440px pt-md-5 mt-md-4">
        <div className="row product-row justify-content-around">
          <div className="col-lg-5 col-12 col-md-12 BWSMO-image-col">
            <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false}/>
          </div>
          <div className="col-lg-5 col-md-11 col-11 pt-5 pt-md-5 product-info-col">
            <h2 className="product-custom-h2">
                Essentials QSR Enclosure
            </h2>
            <p className="product-p-light pt-md-4 pt-4">
              SKU: <br/>
              EQSR
            </p>
          </div>
        </div>
      </div>
      </>
    )
  }
    
}


export default QSRE;