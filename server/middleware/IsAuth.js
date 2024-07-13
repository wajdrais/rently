const jwt = require("jsonwebtoken");
const User = require("../modals/usermodal");

exports.isAuth = async (req, res, next) => {
  const token = req.header("token");
  try {
    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res
        .status(401)
        .json({ msg: "Invalid token, authorization denied" });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      return res
        .status(401)
        .json({ msg: "User not found with provided token" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in authentication middleware:", error.message);
    res.status(500).json({ msg: "Server Error" });
  }
};
