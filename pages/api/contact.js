const nodemailer = require("nodemailer");
require("dotenv").config();

export default async (req, res) => {

  const {name, email, message} = JSON.parse(JSON.stringify(req.body));

  const transporter = nodemailer.createTransport({
    port: 465,
    host: process.env.NEXT_PUBLIC_HOST,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
    from: process.env.email,
    //to: 'quentin.makershoot@gmail.com',
    to: ['quentin.makershoot@gmail.com', req.body.email],
    subject: `Message de ${req.body.name}`,
    text: req.body.message + " | Envoyé de: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Envoyé de:
    ${req.body.email}</p>`
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        console.log(mailData);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({status: "OK"});
};