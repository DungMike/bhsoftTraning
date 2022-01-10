const jwt = require("jsonwebtoken");
const config = process.env;

const verifyToken = (req, res, next) => {
    const token1 =  req.headers.authorization;
    // console.log(token1);
    // ||req.body.token || req.query.token || req.headers["token"];
    if(!token1) return res.status(401).send("Access Denied / Unauthorized request");

    // console.log("token hihi " + token);
    
    try {
        const token = token1.split(' ')[1]// remove bearer 
        // console.log(token)
        if(token === null || !token) return res.status(401).send("Unauthorized request");

        const verifiedUser = jwt.verify(token, config.TOKEN_KEY);
        if(!verifiedUser) return res.status(401).send("Unauthorized request");
        req.user = verifiedUser//
        next();
    }
    catch(err) {
        return res.status(401).send("invalid token");
    }
    // next();
};
module.exports ={
    verifyToken: verifyToken
};