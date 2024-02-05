import express from "express";
import {dirname }from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
var app = express();
var port = 3001;

app.use(bodyParser.urlencoded({extended : true}));
var band="";
function bandName(req,res,next){
    console.log(req.body);
    band = req.body.street+req.body.pet;
    next();
}
app.use(bandName);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

app.post("/submit",(req,res)=>{
    res.send(`<h1>Welcome to band name generator</h1>${band}`);
})

app.listen(port,()=>{
    console.log(`The port number is running on ${port}`)
})