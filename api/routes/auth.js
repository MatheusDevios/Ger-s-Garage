const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    firstname: req.body.enteredFirstName,
    surname: req.body.enteredSurname,
    phone: req.body.enteredMobilePhone,
    email: req.body.enteredEmail,
    password: CryptoJS.AES.encrypt(
      req.body.enteredPassword,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    if (
      !req.body.enteredFirstName ||
      !req.body.enteredSurname ||
      !req.body.enteredMobilePhone ||
      !req.body.enteredEmail ||
      !req.body.enteredPassword
    ) {
      return res.json({ message: "Please enter all the details" });
    }

    //Check if the user already exist or not
    const userExist = await User.findOne({ email: req.body.enteredEmail });
    if (userExist) {
      return res
        .status(401)
        .json({ message: "User already exist with the given email" });
    }

    const savedUser = newUser.save((error) => {
      if (error) {
        console.log("error saving Note: ", error);
      }
    });
    res.status(200).json(savedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const { enteredEmail, enteredPassword } = req.body;

    if (!(enteredEmail && enteredPassword)) {
      return res.status(401).send("All input is required");
    }

    const user = await User.findOne({ email: enteredEmail });

    if (!user) {
      return res.status(401).json({ error: "Wrong credentials!" });
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (OriginalPassword !== req.body.enteredPassword) {
      return res.status(401).json({ error: "Wrong credentials!" });
    } else if (user) {
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        { expiresIn: "1h" }
      );

      const { password, ...others } = user._doc;

      res.status(200).json({ ...others, accessToken });
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
