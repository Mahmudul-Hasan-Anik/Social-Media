const User = require("../Models/UserModels");
const bcrypt = require("bcrypt");
const { emailValidation, lengthValidation } = require("../Helpers/Validation");

exports.register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      userName,
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

    // Length Check
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

    if (!lengthValidation(password, 8, 30)) {
      return res
        .status(400)
        .json({ msg: "Password must be minimum 8 character" });
    }

    // password
    const bcryptedPassword = bcrypt.hash(password, 12);
    console.log(bcryptedPassword);

    return;

    const newUser = new User({
      firstName,
      lastName,
      userName,
      email,
      password,
      birthYear,
      birthMonth,
      birthDay,
      gender,
    });

    await newUser.save();
    res.send(newUser);
  } catch (error) {
    console.log(error);
  }
};
