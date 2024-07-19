const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = jwt.sign({ _id: user._id }, 'secret', {expiresIn: '1d'});
    res.status(201).send({ user, token });
  } catch (err) {
    console.log(err)
    res.status(400).send(err);
  }
});
router.post('/logout', async (req, res) => {
  document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  localStorage.removeItem('token')
  sessionStorage.removeItem('token')
});
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid login credentials');
    }
    const token = jwt.sign({ _id: user._id }, 'secret');
    res.send({ user, token });
  } catch (err) {
    console.log(err)
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
