// require("dotenv").config();
const express = require("express");
const User = require("../models/User");
const route = express.Router();
const { body, validationResult } = require("express-validator");
const bcriptJs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser")


// console.log(SECRET);
const SECRET="gumgumnopistol"
route.post(
  "/createUser",
  [
    body("name", "Enter a valid length Name").notEmpty().isLength({ min: 2 }),
    body("email", "enter a valid email").notEmpty().isEmail(),
    body("password", "Password must contain 5 character")
      .notEmpty()
      .isLength({ min: 5 }),
  ],
  async (req, res) => {
    // console.log(req.body);
    // const user = User(req.body);
    // user.save()
    // if there are error in the entry return bad req
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // checck wheather this email exists or not
    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email exists" });
      }

      const salt = await bcriptJs.genSalt(10);
      // console.log(salt);
      const secPass = await bcriptJs.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, SECRET); //it is a synch method
      // console.log(authToken);
      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occureda t creating user");
    }
  }
);

// Authentication a USer using :POST "/api/auth/login". No login req

route.post(
  "/login",
  [
    body("email", "enter a valid email").notEmpty().isEmail(),
    body("password", "Password must contain 5 character").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const passCompare =  bcriptJs.compare(password, user.password);

      if (!passCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken =  jwt.sign(data, SECRET); //it is a synch method
      // console.log(SECRET);
      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured at login");
    }
  }
);

// Getting loggedn user details :POST "/api/auth/getUser". login req

route.post("/getUser", fetchUser,async (req, res) => {
  
    try {
      // console.log(user);
      const userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user);
    }
    catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = route;
