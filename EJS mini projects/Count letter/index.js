import express from "express";
import bodyParser from "body-parser";
var app = express();
var port = 3000;
app.use(bodyParser.urlencoded({extended : true}));
app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/submit",(req,res)=>{
    var counts = req.body["name"].length +req.body["password"].length;
    res.render("index.ejs",{count : counts}
    );
});

app.listen(port,()=>{
    console.log(`Server Running on ${port}`);
})