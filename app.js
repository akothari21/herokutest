var express = require("express");
var app = express();
app.set("viewengine", "ejs");

app.get("/:name", function(req, res){
    var name=req.params.name;
    res.send("Welcome to my first page, " + name.toUpperCase());
    

})
 app.get("*", function(req, res){
     res.send("hey there! Welcome to  BitByBit. for more details drop a mail to contact.bitbybit@gmail.com");

 });

 app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server started");  
 } );
