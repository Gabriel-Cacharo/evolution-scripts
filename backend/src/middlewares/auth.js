const jwt = require('jsonwebtoken');

function checkToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Acesso negado.' });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (err) {
    console.log(err);

    return res.status(500).json({ error: 'Ocorreu um erro no servidor, tente novamente mais tarde.' });
  }
}

module.exports = { checkToken };
