const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

module.exports = {
  async register(req, res) {
    const { name, email, password, confirmPassword } = req.body;

    // Validations
    if (!name || !email || !password || !confirmPassword) {
      return res.status(422).json({
        error: 'Todos os campos são obrigatórios.',
      });
    }

    if (password !== confirmPassword) {
      return res.status(422).json({
        error: 'As senhas não coincidem.',
      });
    }

    // Encrypt password
    const salt = bcrypt.genSaltSync(12);
    const encryptedPassword = bcrypt.hashSync(password, salt);

    // Check if email exists
    const emailAlreadyExists = await User.findOne({ where: { email: email } });

    if (emailAlreadyExists) {
      return res.status(422).json({ error: 'Esse email já está cadastrado em nosso sistema.' });
    }

    // Create User
    try {
      await User.create({ name, email, password: encryptedPassword });

      return res.status(201).json({ msg: 'Registro efetuado com sucesso.' });
    } catch (err) {
      console.log(err);

      return res.status(500).json({ error: 'Ocorreu um erro no servidor, tente novamente mais tarde.' });
    }
  },

  async login(req, res) {
    const { email, password } = req.body;

    // Validations
    if (!email || !password) {
      return res.status(422).json({
        error: 'Todos os campos são obrigatórios.',
      });
    }

    // Check if user exists
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    // Check password
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(422).json({
        error: 'Senha inválida.',
      });
    }

    try {
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '48h',
        },
      );

      res.status(200).json({ msg: 'Login realizado com sucesso.', token });
    } catch (err) {
      console.log(err);

      return res.status(500).json({ error: 'Ocorreu um erro no servidor, tente novamente mais tarde.' });
    }
  },
};
