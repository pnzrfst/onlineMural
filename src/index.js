import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express()

app.use(express.static(path.join(__dirname, 'src/js')));
app.use(express.static(path.join(__dirname, 'view')));

app.get("/home", function(req, res){
    res.sendFile(path.join(__dirname, 'view/home/index.html'))
})

app.get("/sobre", function(req, res){
    res.send("Sobre:")
})

app.get("/user/:nome/:cargo", function(req, res){
    res.sendFile(path.join(__dirname, "../view/user.html"));
})



app.listen(3000, () =>{
    console.log('ola')
})