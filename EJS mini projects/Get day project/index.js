import express from "express";

var app = express();
var port = 3000;

app.get("/",(req,res)=>{
    var todya = new Date();
    const day = todya.getDate();
    
    var type = "a weekday";
    var adv = "It time to work hard";
    if(day===0 || day===6){
        var type = "a weekend";
        var adv = "It time to have some fun";
    }
    res.render("index.ejs",{
        dateType : type,
        advise: adv});
});

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});