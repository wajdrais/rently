const { body, validationResult } = require("express-validator");
exports.SignupValidation = [
  body("email", "This format is not correct").isEmail(),
  body(
    "password",
    "This password must contain at least A-Z and number"
  ).isStrongPassword({
    minLength: 8,
    minLowercase: 0,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 0,
  }),
];
exports.SigninValidation = [
  body("email", "This format is not correct").isEmail(),
];
exports.NumberComplete = [body("phone", "Number is not valid").isLength(8)];
exports.validation = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send({ errors: errors.array() });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).send({ msg: "Error" });
  }
};

exports.AddProductValidation = [
  body("title", "Title is required").notEmpty(),
  body("category", "Category is required").notEmpty(),
  body("price", "Price must be a valid number").isNumeric(),
  body("description", "Description is required").notEmpty(),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
