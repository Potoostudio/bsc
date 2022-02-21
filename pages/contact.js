import { useState } from 'react';
import Head from 'next/head'


export default function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [phone, setPhone] = useState("")
    const [order, setOrder] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const [spanClass, setSpanClass] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('sending')

        let data = {
            name,
            email,
            message,
            phone,
            order
        }

        fetch('/api/contact-handle', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if (res.status === 200) {
              setSubmitted(true)
            }
          })

              setName("")
              setPhone("")
              setEmail("")
              setOrder("")
              setMessage("")

              setSpanClass(!spanClass)
    }

    return (
        <>
        <Head>
        <link rel="icon" href="/favicon.png" /> 
        <title>BSC Enclosures | Contact Us </title>
        <meta name="description" content="BSC Enclosures | Contact Us"/>
        <meta name="keywords" content="BSC Enclosures | Contact Us | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

        <div className="container">
            <div className="row justify-content-center pt-5 mt-2">
                <div className="col-lg-7 col-md-10 col-11 text-center">
                    <h2 className="contact-us-h2">
                        Contact Us
                    </h2>
                </div>
                <div className="col-lg-7 col-md-10 col-11 text-center pt-md-4 pt-1">
                    <h3 className="contact-us-h2">
                        <a href="tel:888.243.1194" className="phone-number">
                            888.243.1194
                        </a>
                    </h3>
                </div>
                <div className="col-lg-6 col-md-10 col-11 pt-md-5 pt-3">
                    <form className="contact-form">
                        <formGroup className="inputGroup">
                            <label htmlFor="name" className="contact-form-label">Name</label>
                            <input type="text" name="name" value={name} className="contact-form-input name p-2" 
                            onChange={(e)=>{setName(e.target.value)}}/>
                        </formGroup>
                        <formGroup className="inputGroup">
                            <label htmlFor="phone" className="contact-form-label">Phone Number</label>
                            <input type="tel" name="phone" value={phone} className="contact-form-input phone p-2"
                            onChange={(e)=>{setPhone(e.target.value)}}/>
                        </formGroup>
                        <formGroup className="inputGroup">
                            <label htmlFor="email" className="contact-form-label">Email</label>
                            <input type="text" name="email" value={email} className="contact-form-input email p-2"
                            onChange={(e)=>{setEmail(e.target.value)}} required/>
                        </formGroup>
                        <formGroup className="inputGroup">
                            <label htmlFor="order" className="contact-form-label">Order Number</label>
                            <input type="text" name="order" value={order} className="contact-form-input email p-2"
                            onChange={(e)=>{setOrder(e.target.value)}} required/>
                        </formGroup>
                        <formGroup className="inputGroup">
                            <label htmlFor="message" className="contact-form-label">Message</label>
                            <textarea rows="4" cols="50" type="text" name="message" value={message} className="contact-form-input message p-2"
                            onChange={(e)=>{setMessage(e.target.value)}}/>
                        </formGroup>

                        <input type="submit" value="Send" className="submit-btn" onClick={(e)=>{handleSubmit(e)}}/>

                        <span className={spanClass ? "span-class" : "span-class-show"}>Thank you for contacting us! <br /> <span className="font-weight-normal">We will get back to you soon</span> </span>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}