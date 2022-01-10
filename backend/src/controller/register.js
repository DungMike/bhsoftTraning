const userModel = require("../models/user");

require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res)=> {
    res.send("register");
}
const postRegister = async (req, res)=> {
    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password )) {
        res.status(400).send("All input is required");
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await userModel.findOne({ email });

        if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
        }

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await userModel.create({
        
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
        });

        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
        // save user token
        user.token = token;

        // return new user
        res.status(201).json(user);
    } 
    catch (err) {
        console.log(err);
    }
}
module.exports = {

    register: register,
    postRegister: postRegister
}