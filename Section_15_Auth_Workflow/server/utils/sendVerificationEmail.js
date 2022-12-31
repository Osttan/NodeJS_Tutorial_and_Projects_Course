const sendEmail = require('./sendEmail');

const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  const message =
    '<p>Please confirm your e-mail by clicking on the following link: </p>';

  return sendEmail({
    to: email,
    subject: 'Email Confirmation',
    html: `<h4> Hello ${name}</h4> ${message}`,
  });
};

module.exports = sendVerificationEmail;
