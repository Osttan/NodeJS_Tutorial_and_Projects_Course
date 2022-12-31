const nodemailer = require('nodemailer');
const nodemailerConfig = require('./nodemailerConfig');

const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(nodemailerConfig);

  return transporter.sendMail({
    from: '"Auth Workflow 👻" <auth_workflow@example.com>', // sender address
    to,
    subject,
    html, // html body
  });
};

module.exports = sendEmail;
