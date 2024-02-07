import express from "express";

var app = express();
var port = 3000;

app.get("/",(req,res)=>{
    const data = {
        title : "EJS TAGS",
        seconds : new Date().getSeconds(),
        items : ["apple","banana","cherry"],
        htmlContent : "<em>This is some em text</em>",
    };
    res.render("index.ejs",data);
})
app.listen(port,()=>{
    console.log(`Server Running on ${port}`);
});