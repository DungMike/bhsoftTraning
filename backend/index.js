
const app = require("./src/app");
var cors = require('cors')


const port = 4000;
app.use(cors())
app.listen(port, ()=> {
    console.log("server is runing on port + " + port);
})