const User = require("../Models/UserModels");
const bcrypt = require("bcrypt");
const {
  emailValidation,
  lengthValidation,
  userValidation,
} = require("../Helpers/Validation");
const { generateToken } = require("../Helpers/Tokens");
const { sendVerificationEmail } = require("../Helpers/Mailer");
// const { sendEmailVerification } = require("../Helpers/Mailer");

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

    const emailVerificationToken = generateToken({ id: User._id }, "30m");

    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;

    sendVerificationEmail(newUser.email, newUser.firstName, url);

    await newUser.save();
    res.send(newUser);
  } catch (error) {
    console.log(error);
  }
};
