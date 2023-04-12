const express = require("express");


const app = express();

//default middleware to express to read js file in json
app.use(express.json());

app.use(myMiddleware);

function myMiddleware( req, res, next){
    console.log("Inside the middle ware is created");
    next(); // It will pass on the 
}


/**
 * Stitch the routes to the server
 */

require("./routes/idea.routes")(app);


/**
 * Starting server
 */
app.listen(8000, () => {
    console.log("server started");
})