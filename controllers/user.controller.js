const User = require('../libs/models/user.model');

const createUser = async (req, res) => {
  await User.create({
    email: 'nkayotoro@gmail.com',
    password: 'bitchtits80',
  });

  res.render('user', { message: 'User Created', user: null });
};

const getUser = async (req, res) => {
  const user = await User.findOne({ email: 'nkayotoro@gmail.com' });

  res.render('user', { message: 'User Retrieved', user: user });
};

const deleteUser = async (req, res) => {
  await User.findOneAndDelete({ email: 'nkayotoro@gmail.com' });
  
  res.render('user', { message: 'User Deleted', user: null });
};

module.exports = {
  getUser,
  createUser,
  deleteUser,
};