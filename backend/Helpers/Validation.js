exports.emailValidation = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};

exports.lengthValidation = (text, min, max) => {
  if (text.length > max || text.length < min) {
    return false;
  }
  return true;
};
