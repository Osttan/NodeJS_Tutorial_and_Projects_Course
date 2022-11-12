const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'john') {
    req.user = { name: 'John', id: 3 };
    next();
  } else {
    res.status(401).send('Unauthorized User');
  }
};

module.exports = authorize;
