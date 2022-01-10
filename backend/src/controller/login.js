const userModel = require("../models/user");

require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");




const postLogin = async (req, res)=> {
  console.log("have a user try to login");
    try {
        // Get user input
        const { email, password } = req.body;
        console.log(req.body);
    
        // Validate user input
        if (!(email && password)) {
          res.status(400).json({
            error: true,
            message: "Username or Password is required."
          });
        }
        
        // Validate if user exist in our database
        const user = await userModel.findOne({ email });
        console.log(user);
        if (user && (await bcrypt.compare(password, user.password))) {
          // Create token
          const payLoad = {id: user._id, email}
          const token = jwt.sign(
            payLoad,
            process.env.TOKEN_KEY
          );
        await res.status(200).header("authToken", token).send({"token": token});
            console.log(token +" token da duoc set vao header")
          // save user token
          // user.token = token;
          // res.setHeader("x-access-token": token);
          // res.set('token', token)
          // user
          // res.status(200).json(user);
          // console.log(user);
        }
        else{
        res.status(400).send("Invalid Credentials");
        }
      } 
      catch (err) {
        console.log(err);
      }
}

module.exports = {
    postLogin: postLogin
}