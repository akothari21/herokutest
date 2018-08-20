var express = require("express");
var app = express();
app.set("viewengine", "ejs");

app.get("/:name", function(req, res){
    var name=req.params.name;
    res.send("Welcome to my first page, " + name.toUpperCase());
    

})
 app.get("*", function(req, res){
     res.send("heyyyyyyyyy");

 });

 app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server started");  
 } );
