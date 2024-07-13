const Users = require("../modals/usermodal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.Signup = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const foundName = await Users.findOne({ name });
    console.log(foundName);
    const foundEmail = await Users.findOne({ email });
    if (foundName) {
      res.status(400).send({ errors: [{ msg: "Name already used!" }] });
    } else if (foundEmail) {
      res.status(400).send({ errors: [{ msg: "Email already used!" }] });
    } else {
      const user = new Users(req.body);
      const hashedpassword = bcrypt.hashSync(password, 10);
      user.password = hashedpassword;
      const secretkey = "wajd321";
      const token = jwt.sign(
        {
          id: user._id,
        },
        secretkey
      );
      await user.save();
      res.status(200).send({ msg: "Account created successfuly", user, token });
    }
  } catch (error) {
    res.status(500).send({ msg: "Try again", error });
  }
};
exports.Signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundEmail = await Users.findOne({ email });
    if (!foundEmail) {
      res.status(400).send({
        errors: [{ msg: "You don't have an account ! Signup NOW !" }],
      });
    } else {
      const match = bcrypt.compareSync(password, foundEmail.password);
      if (!match) {
        res.status(400).send({ errors: [{ msg: "Incorrect password" }] });
      } else {
        const secretkey = "wajd321";
        const token = jwt.sign(
          {
            id: foundEmail._id,
          },
          secretkey
        );
        res.status(200).send({ msg: "Welcome Back!", user: foundEmail, token });
      }
    }
  } catch (error) {
    res.status(500).send({ msg: "Try again", error });
  }
};
exports.CompleteProfil = async (req, res) => {
  const { phone } = req.body;
  try {
    const foundPhone = await Users.findOne({ phone });
    if (foundPhone) {
      res
        .status(400)
        .send({ errors: [{ msg: "The phone number is already used!" }] });
    } else {
      const user = await Users.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).send({ msg: "Profile Completed" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Try again", error });
  }
};
exports.UpdateProfile = async (req, res) => {
  const { phone, email } = req.body;
  const userId = req.params.id;

  try {
    // Initialize variables to check for conflicts
    let phoneConflict = false;
    let emailConflict = false;

    // Check if the new phone number is already in use by another user
    if (phone) {
      const foundPhone = await Users.findOne({ phone });
      if (foundPhone && foundPhone._id.toString() !== userId) {
        phoneConflict = true;
      }
    }

    // Check if the new email is already in use by another user
    if (email) {
      const foundEmail = await Users.findOne({ email });
      if (foundEmail && foundEmail._id.toString() !== userId) {
        emailConflict = true;
      }
    }

    // If there are any conflicts, send an appropriate response
    if (phoneConflict && emailConflict) {
      return res.status(400).send({
        errors: [{ msg: "Both email and phone number have been used before!" }],
      });
    } else if (phoneConflict) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Phone number has been used before!" }] });
    } else if (emailConflict) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Email has been used before!" }] });
    }

    // Construct the update object with only the fields that need to be updated
    const updateFields = { ...req.body };
    if (phone) updateFields.phone = phone;
    if (email) updateFields.email = email;

    // Update the user with the new information
    const user = await Users.findByIdAndUpdate(
      userId,
      {
        $set: updateFields,
      },
      { new: true }
    );

    res.status(200).send({ msg: "Profile Updated", user });
  } catch (error) {
    res.status(500).send({ msg: "Try again", error });
  }
};

exports.Getallusers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).send({ users });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.Getuser = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).send({ user });
  } catch (error) {
    res.status(500).send({ msg: "User not found", error });
  }
};
