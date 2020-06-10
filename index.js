const express = require("express");
const app = express();


app.use(express.static('public')); 
app.set("view engine", "ejs");
 
app.use("/cargo", function(request, response){
     
    response.render("cargo", {

    });
});
app.use("/", function(request, response){
     
    response.render("index", {

    });
});
app.listen(3000);