module.exports = {
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'isaac.wehner@ethereal.email',
    pass: process.env.ETHEREAL,
  },
  tls: {
    rejectUnauthorized: false,
  },
};
