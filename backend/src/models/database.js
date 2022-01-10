const mongoose = require('mongoose');
const {MONGO_URI} = process.env;
exports.connect = () => {
    mongoose
        .connect('mongodb://localhost/shop_banruou' ,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
        })
        .then(()=> {
            console.log("connected to database");
        })
        .catch((error) => {
            console.log("data connection failed, exit now...");
            console.log(error);
            process.exit(1);
        });
};