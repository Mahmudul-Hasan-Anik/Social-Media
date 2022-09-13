const User = require("../Models/UserModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  emailValidation,
  lengthValidation,
  userValidation,
} = require("../Helpers/Validation");
const { generateToken } = require("../Helpers/Tokens");
const { sendVerificationEmail } = require("../Helpers/Mailer");

// REGISTRATION
exports.register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      birthYear,
      birthMonth,
      birthDay,
      gender,
    } = req.body;

    // Email Validation
    if (!emailValidation(email)) {
      return res.status(500).json({ msg: "Email not Valid" });
    }

    // Check user exist or not
    const checkEmail = await User.findOne({ email });

    if (checkEmail) {
      return res
        .status(400)
        .json({ msg: "This Email already used. Please try another one" });
    }

    // First & Last Name Length Check
    if (!lengthValidation(firstName, 4, 30)) {
      return res
        .status(400)
        .json({ msg: "First Name must be between 4 and 30 character" });
    }

    if (!lengthValidation(lastName, 4, 30)) {
      return res
        .status(400)
        .json({ msg: "Last Name must be between 4 and 30 character" });
    }

    // password
    if (!lengthValidation(password, 8, 30)) {
      return res
        .status(400)
        .json({ msg: "Password must be minimum 8 character" });
    }

    const bcryptedPassword = await bcrypt.hash(password, 12);

    // unique username genarate
    const temporaryUserName = firstName + lastName;
    const newUserName = await userValidation(temporaryUserName);

    // return;
    const newUser = new User({
      firstName,
      lastName,
      userName: newUserName,
      email,
      password: bcryptedPassword,
      birthYear,
      birthMonth,
      birthDay,
      gender,
    });

    await newUser.save();

    const emailVerificationToken = generateToken({ id: User._id }, "30m");

    // SENT MAIL FOR VERIFY USER REGISTRATION
    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    sendVerificationEmail(newUser.email, newUser.firstName, url);

    // TOKEN FOR USE LOGIN
    const token = generateToken({ id: newUser._id.toString() }, "3d");

    res.send({
      id: newUser._id,
      userName: newUser.userName,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      token: token,
      varified: newUser.varified,
      message: "Registration successful ! Verify your mail for login",
    });
  } catch (error) {
    res.status(500).json({ massage: error.massage });
  }
};

// USER ACTIVATION AFTER VERIFY EMAIL
exports.userActivation = async (req, res) => {
  try {
    const { token } = req.body;

    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    const check = await User.findById(user.id);

    if (check.varified == true) {
      return res.status(400).json({ massage: "This email already activated" });
    } else {
      await User.findByIdAndUpdate(user.id, { varified: true });
      return res.status(200).json({ massage: "Account has been activated" });
    }
  } catch (error) {
    res.status(500).json({ massage: error.massage });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ massage: "Incorrect Email Address, try again" });
    }

    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword) {
      res.status(500).json({ massage: "Invalid Password" });
    } else {
      const token = generateToken({ id: user._id.toString() }, "3d");
      res.send({
        id: user._id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        token: token,
        varified: user.varified,
        message: "Login successful",
      });
    }
  } catch (error) {
    res.status(500).json({ massage: error.massage });
  }
};
