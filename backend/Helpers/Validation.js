const User = require("../Models/UserModels");

// Email Validation
exports.emailValidation = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};

// Length Validation
exports.lengthValidation = (text, min, max) => {
  if (text.length > max || text.length < min) {
    return false;
  }
  return true;
};

// username validation
exports.userValidation = async (userName) => {
  let user = false;

  do {
    const check = await User.findOne({ userName });

    if (check) {
      userName += (+new Date() * Math.random()).toString().substring(0, 1);
      user = true;
    } else {
      user = false;
    }
  } while (user);
  return userName;
};
