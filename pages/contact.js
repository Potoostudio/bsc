
import React from 'react';
import {Helmet} from "react-helmet"


export default function Contact(){

    return (
        <>
            <div className="elfsight-app-f65555dc-0b73-4093-80ad-e3eb68ff0b1b"></div>
        <Helmet>
            <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        </Helmet>
        </>
    )
}



// import React, { useState } from "react";

// export default function ContactUs() {
//   const [fullname, setFullname] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   //   Form validation
//   const [errors, setErrors] = useState({});

//   //   Setting button text
//   const [buttonText, setButtonText] = useState("Send");

//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [showFailureMessage, setShowFailureMessage] = useState(false);

//   const handleValidation = () => {
//     let tempErrors = {};
//     let isValid = true;

//     if (fullname.length <= 0) {
//       tempErrors["fullname"] = true;
//       isValid = false;
//     }
//     if (email.length <= 0) {
//       tempErrors["email"] = true;
//       isValid = false;
//     }
//     if (subject.length <= 0) {
//       tempErrors["subject"] = true;
//       isValid = false;
//     }
//     if (message.length <= 0) {
//       tempErrors["message"] = true;
//       isValid = false;
//     }

//     setErrors({ ...tempErrors });
//     console.log("errors", errors);
//     return isValid;
//   };

//   //   const [form, setForm] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     let isValidForm = handleValidation();

//     if (isValidForm) {
//       setButtonText("Sending");
//       const res = await fetch("/api/sendgrid", {
//         body: JSON.stringify({
//           email: email,
//           fullname: fullname,
//           subject: subject,
//           message: message,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//         method: "POST",
//       });

//       const { error } = await res.json();
//       if (error) {
//         console.log(error);
//         setShowSuccessMessage(false);
//         setShowFailureMessage(true);
//         setButtonText("Send");

//         // Reset form fields
//         setFullname("");
//         setEmail("");
//         setMessage("");
//         setSubject("");
//         return;
//       }
//       setShowSuccessMessage(true);
//       setShowFailureMessage(false);
//       setButtonText("Send");
//       // Reset form fields
//       setFullname("");
//       setEmail("");
//       setMessage("");
//       setSubject("");
//     }
//     console.log(fullname, email, subject, message);
//   };
//   return (
//     <main>

//       <header className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 lg:px-40 bg-blue-50 dark:bg-blue-900 md:h-96">
//         <form
//           onSubmit={handleSubmit}
//           className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
//         >
//           <h1 className="text-2xl font-bold dark:text-gray-50">
//             Send a message
//           </h1>

//           <label
//             htmlFor="fullname"
//             className="text-gray-500 font-light mt-8 dark:text-gray-50"
//           >
//             Full name<span className="text-red-500 dark:text-gray-50">*</span>
//           </label>
//           <input
//             type="text"
//             value={fullname}
//             onChange={(e) => {
//               setFullname(e.target.value);
//             }}
//             name="fullname"
//             className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
//           />
//           {errors?.fullname && (
//             <p className="text-red-500">Fullname cannot be empty.</p>
//           )}

//           <label
//             htmlFor="email"
//             className="text-gray-500 font-light mt-4 dark:text-gray-50"
//           >
//             E-mail<span className="text-red-500">*</span>
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//             className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
//           />
//           {errors?.email && (
//             <p className="text-red-500">Email cannot be empty.</p>
//           )}

//           <label
//             htmlFor="subject"
//             className="text-gray-500 font-light mt-4 dark:text-gray-50"
//           >
//             Subject<span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             name="subject"
//             value={subject}
//             onChange={(e) => {
//               setSubject(e.target.value);
//             }}
//             className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
//           />
//           {errors?.subject && (
//             <p className="text-red-500">Subject cannot be empty.</p>
//           )}
//           <label
//             htmlFor="message"
//             className="text-gray-500 font-light mt-4 dark:text-gray-50"
//           >
//             Message<span className="text-red-500">*</span>
//           </label>
//           <textarea
//             name="message"
//             value={message}
//             onChange={(e) => {
//               setMessage(e.target.value);
//             }}
//             className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
//           ></textarea>
//           {errors?.message && (
//             <p className="text-red-500">Message body cannot be empty.</p>
//           )}
//           <div className="flex flex-row items-center justify-start">
//             <button
//               type="submit"
//               className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
//             >
//               {buttonText}
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="text-cyan-500 ml-2"
//                 fill="currentColor"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
//                   fill="currentColor"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="text-left">
//             {showSuccessMessage && (
//               <p className="text-green-500 font-semibold text-sm my-2">
//                 Thankyou! Your Message has been delivered.
//               </p>
//             )}
//             {showFailureMessage && (
//               <p className="text-red-500">
//                 Oops! Something went wrong, please try again.
//               </p>
//             )}
//           </div>
//         </form>
//       </header>
//     </main>
//   );
// }




// import { useState } from 'react';
// import Head from 'next/head'


// export default function Contact() {

//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [message, setMessage] = useState("")
//     const [phone, setPhone] = useState("")
//     const [order, setOrder] = useState("")
//     const [submitted, setSubmitted] = useState(false)

//     const [spanClass, setSpanClass] = useState(true)

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('sending')

//         let data = {
//             name,
//             email,
//             message,
//             phone,
//             order
//         }

//         fetch('/api/contact-handle', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json, text/plain, */*',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         }).then((res) => {
//             if (res.status === 200) {
//               setSubmitted(true)
//               console.log('Form sent!');
//             }
//           })

//               setName("")
//               setPhone("")
//               setEmail("")
//               setOrder("")
//               setMessage("")

//               setSpanClass(!spanClass)
//     }

//     return (
//         <>
//         <Head>
//         <link rel="icon" href="/favicon.png" /> 
//         <title>BSC Enclosures | Contact Us </title>
//         <meta name="description" content="BSC Enclosures | Contact Us"/>
//         <meta name="keywords" content="BSC Enclosures | Contact Us | Wellness Station | kiosks | Totems | Outdoor Kiosks"/>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//       </Head>

//         <div className="container">
//             <div className="row justify-content-center pt-5 mt-2">
//                 <div className="col-lg-7 col-md-10 col-11 text-center">
//                     <h2 className="contact-us-h2">
//                         Contact Us
//                     </h2>
//                 </div>
//                 <div className="col-lg-7 col-md-10 col-11 text-center pt-md-4 pt-1">
//                     <h3 className="contact-us-h2">
//                         <a href="tel:888.243.1194" className="phone-number">
//                             888.243.1194
//                         </a>
//                     </h3>
//                 </div>
//                 <div className="col-lg-6 col-md-10 col-11 pt-md-5 pt-3">
//                     <form className="contact-form">
//                         <formGroup className="inputGroup">
//                             <label htmlFor="name" className="contact-form-label">Name</label>
//                             <input type="text" name="name" value={name} className="contact-form-input name p-2" 
//                             onChange={(e)=>{setName(e.target.value)}}/>
//                         </formGroup>
//                         <formGroup className="inputGroup">
//                             <label htmlFor="phone" className="contact-form-label">Phone Number</label>
//                             <input type="tel" name="phone" value={phone} className="contact-form-input phone p-2"
//                             onChange={(e)=>{setPhone(e.target.value)}}/>
//                         </formGroup>
//                         <formGroup className="inputGroup">
//                             <label htmlFor="email" className="contact-form-label">Email</label>
//                             <input type="text" name="email" value={email} className="contact-form-input email p-2"
//                             onChange={(e)=>{setEmail(e.target.value)}} required/>
//                         </formGroup>
//                         <formGroup className="inputGroup">
//                             <label htmlFor="order" className="contact-form-label">Order Number</label>
//                             <input type="text" name="order" value={order} className="contact-form-input email p-2"
//                             onChange={(e)=>{setOrder(e.target.value)}} required/>
//                         </formGroup>
//                         <formGroup className="inputGroup">
//                             <label htmlFor="message" className="contact-form-label">Message</label>
//                             <textarea rows="4" cols="50" type="text" name="message" value={message} className="contact-form-input message p-2"
//                             onChange={(e)=>{setMessage(e.target.value)}}/>
//                         </formGroup>

//                         <input type="submit" value="Send" className="submit-btn" onClick={(e)=>{handleSubmit(e)}}/>

//                         <span className={spanClass ? "span-class" : "span-class-show"}>Thank you for contacting us! <br /> <span className="font-weight-normal">We will get back to you soon</span> </span>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </>
//     )
// }