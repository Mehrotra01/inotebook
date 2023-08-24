const express = require("express");
const User = require("../models/User");
const route = express.Router();
const { body, validationResult } = require("express-validator");

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
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      // .then(user => res.json(user))
      // .catch(err=>{console.log(err)
      // res.json("message:"+ err.message)});
      // res.json({nice:"Gob Done"});
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);
module.exports = route;
