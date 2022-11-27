const User = require("../models/user.model");
const signupController = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  // console.log('body: ', req.body);
  const user = new User({
    firstname,
    lastname,
    email,
    password,
  });

  const createdUser = await user.save()

  if(createdUser){
    // console.log(createdUser);
    return res.json({'success': true})
  }
};
const loginController = async (req, res) => {
  const {email} = req.body

  const findUser = await User.findOne({email})

  // console.log('user: ', findUser);

  if(findUser){
    return res.json({succes: true, id: findUser._id, firstname: findUser.firstname, lastname: findUser.lastname})
  }

  res.status(404).json({success: false, message: "User not found"})
};

const getAllUsers = async (req, res) => {
  const users = await User.find();

  return res.json(users)
}

module.exports = { loginController, signupController, getAllUsers };
