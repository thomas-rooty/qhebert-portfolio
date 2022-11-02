export default function (req, res) {
  require('dotenv').config()

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: process.env.port,
    host: process.env.host,
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
    secure: true,
  })
  const mailData = {
    from: process.env.email,
    to: 'tc.caron91@gmail.com',
    subject: `Message de ${req.body.name}`,
    text: req.body.message + " | Envoyé de: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Envoyé de:
    ${req.body.email}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.send('success')
}