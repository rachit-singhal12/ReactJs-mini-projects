import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

var app = express();
var port = 3000;
var crct_pass = "ILoveProgramming";
var userAuthority = false;

app.use(bodyParser.urlencoded({ extended: true }));

function checkingList(req,res,next)
{
    var pass = req.body["password"];
    if(pass === crct_pass)
    {
        userAuthority = true;
    }
    next();
}
app.use(checkingList);
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });


app.post("/check",(req,res)=>{
    if(userAuthority)
    {
        userAuthority = false;
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
})
app.listen(port,()=>{
    console.log(`Server sunning on ${port}`);
})