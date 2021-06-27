const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const register =  async(req, res) => {
  console.log(req.body);
  try {
      const hashedPwd = await bcrypt.hash(req.body.password, 10);
      await User.create({
          username: req.body.username,
          password: hashedPwd,
          email: req.body.email,
      });
      res.redirect('/');

  } catch (error) {
    console.log(error);
    res.status(500).redirect('/');
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (user) {
      const cmp = await bcrypt.compare(req.body.password, user.password);
      if (cmp) {
        res.send('<h1>Auth Successful</h1>');
      } else {
        res.send('<h1>"Wrong username or password."</h1>');
      }
    } else {
      res.send('<h1>"Wrong username or password."</h1>');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
};


module.exports = {
    register,
    login
  }