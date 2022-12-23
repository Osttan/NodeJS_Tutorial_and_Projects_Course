const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: 'florian.steuber33@ethereal.email',
      pass: 'zEmKUX6crzPG1Gy8s2',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let info = await transporter.sendMail({
    from: '"Coding Addict" <codingaddict@gmail.com>',
    to: 'bar@example.com',
    subject: 'Hello!',
    html: '<h2>Sending E-mails with Node.js</h2>',
  });

  res.json(info);
};

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'andre.ostan@live.com', // Change to your recipient
    from: 'andre.ostan@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  // const info = await sgMail.send(msg);
  // res.json(info);
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch(error => {
      console.error(error);
    });
  res.send();
};
module.exports = sendEmail;
