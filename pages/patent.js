import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Patent() {

    return (
        <>
        <Head>
            <link rel="icon" href="/favicon.png" /> 
            <title>BSC Enclosures | Patent </title>
            <meta name="description" content="BSC Enclosures | Patent"/>
            <meta name="keywords" content="BSC Enclosures | Patent | Outdoor Kiosks | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

        <div className="container pt-md-5 mt-md-5 pt-5 mt-3">
            <div className="row justify-content-around">
                <div className="col-md-10 col-10 col-lg-4">
                    <h1 className="custom-patent-h1">
                        Patent
                    </h1>
                    <div className="patent-pic-div">
                        <Image
                        src="/patent-pic.jpg"
                        width={269}
                        height={429}
                        alt="BSC Patent"
                        className="patent-pic"
                        />
                    </div>
                </div>
                <div className="col-10 col-lg-7 pt-md-10 pt-lg-5 pb-md-5 col-10 pb-5 pt-4">
                    <ul className="list list-unstyled pb-md-4 pb-1">
                        <li className="item ">
                            <p className="patent-p">
                                <span className="text-bold pr-md-2rem paten-span">Application:</span> Rapid Access Display Housing
                            </p>
                        </li>
                        <li className="item ">
                            <p className="patent-p">
                                <span className="text-bold pr-md-5 paten-span">Paten No:</span> 11,089,698
                            </p>
                        </li>
                    </ul>
                    <Image
                    src="/Patent.jpg"
                    width={535}
                    height={651}
                    alt="BSC Patent"
                    />
                </div>
            </div>
        </div>
        
    </>
    )
}

