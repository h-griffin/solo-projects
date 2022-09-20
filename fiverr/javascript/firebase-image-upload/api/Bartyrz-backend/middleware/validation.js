const { check, param, validationResult } = require("express-validator");

exports.loginValidation = [
  check("email", "Please Enter Valid Email").exists().isEmail(),
  check("password", "Please Enter Valid Password").exists(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .send({ errors: errors.array({ onlyFirstError: true }) })
        .status(400);
    } else next();
  },
];

exports.submissionValidation = [
  check("firstName", "First Name must be greater than 2 Characters")
    .exists()
    .isAlphanumeric("en-US", { ignore: " " })
    .isLength({
      min: 2,
    }),
  check("lastName", "Last Name must be greater than 2 Characters")
    .exists()
    .isAlphanumeric("en-US", { ignore: " " })
    .isLength({
      min: 2,
    }),
  check("email", "Please Enter Valid Email").exists().isEmail(),
  check("itemTitle", "Item Title must be less than 20 Characters")
    .exists()
    .isAlphanumeric("en-US", { ignore: " " })
    .isLength({
      max: 20,
    }),
  check("itemDesc", "Item Description must be less than 200 characters")
    .exists()
    .isString()
    .isLength({
      max: 200,
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .send({ errors: errors.array({ onlyFirstError: true }) })
        .status(400);
    } else next();
  },
];
