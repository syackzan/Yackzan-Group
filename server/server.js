const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
const path = require('path');
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", //replace with your email provider
    port: 587,
    auth: {
      user: 'Alexander101512@outlook.com',
      pass: 'Theres8!',
    },
});

transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
});

app.post("/send", (req, res) => {
//1.

    console.log(req.body);

    //2. You can configure the object however you want
//   const mail = {
//     from: data.name,
//     to: process.env.EMAIL,
//     subject: data.subject,
//     text: `${data.name} <${data.email}> \n${data.message}`,
//   };

//   //3.
//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("Something went wrong.");
//     } else {
//       res.status(200).send("Email successfully sent to recipient!");
//     }
//   });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})