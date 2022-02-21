
require('dotenv').config()

export default function (req, res) {
    
    
    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'bscenclosurescontact@gmail.com',
            pass: 'BscWebsite19!'
        },
        // tls: {
        //   rejectUnauthorized:false
        // }
    });

    const mailData = {
        from: 'sender@bscenclosures.com',
        to: 'bscenclosurescontact@gmail.com, ahmed@serpentix.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<p>Message: ${req.body.message}</p> 
        <p>Phone Number: ${req.body.phone} </p>
        <p>Email: ${req.body.email} </p>
        <p>Order number: ${req.body.order}</p>
        <p>Sent from: ${req.body.email}</p>
        <p>--------------------------------------</p>
        <p>Contact ahmed@serpentix.com if there is any problem</p>`
      }

      transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(`error occurred ${err}`)
        else
          console.log(`form info is sent! ${info}`)
      })
      res.status(200)
}