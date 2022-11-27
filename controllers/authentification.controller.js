const User = require("../models/user.model");
const signupController = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  console.log(req.body);
  const user = new User({
    firstName,
    lastName,
    email,
    password,
  });

  const createdUser = await user.save()

  if(createdUser){
    console.log(createdUser);
    return res.json({'success': true})
  }
};
const loginController = async (req, res) => {
  const {email} = req.body

  const findUser = await User.findOne({email})

  if(findUser){
    return res.json({id: findUser._id, firstName: findUser.firstName, lastName: findUser.lastName})
  }

  res.status(404).json({success: false, message: "User not found"})
};

module.exports = { loginController, signupController };
