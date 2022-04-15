const jwt = require('jsonwebtoken');

module.exports = {
  async verifyToken(req, res) {
    const { token } = req.body;

    // Validations
    if (!token) {
      return res.status(422).json({
        error: 'Todos os campos são obrigatórios.',
      });
    }

    // Token validation
    try {
      jwt.verify(token, process.env.JWT_SECRET);

      return res.status(200).json({ msg: 'Token correto.' });
    } catch (err) {
      console.log(err);

      return res.status(400).json({ error: 'O token é inválido.' });
    }
  },
};
