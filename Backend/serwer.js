const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const fs = require('fs');



app.use(cors());
app.use(express.json());


app.post('/login', (req, res) => {
    const { username, password} = req.body;
    const help = readUsersFile();
    const user = help.find(u => u.username === username && u.password === password);

    if(user){
        res.json({success: true, message: "Zalogowano"});
    }
    else{
        res.status(401).json({success: false, message: "Ni działa"})
    }
})

app.post('/register', (req, res) =>{
    const {username, password} = req.body;
    const help = readUsersFile();
    const user = help.find(u => u.username === username);
    if(!user){
        help.push({username, password});
        if(writeUsersFile(help))
        {
            res.json({success: true, message: "Zarejestrowano"})
        }
        else
        {
            res.status(401).json({success: false, message: "Ni działa"})
        }

    }
    else{
        res.status(401).json({success: false, message: "Ni działa"})
    }
})


app.listen(port, ()=>{
    console.log(`Serwer na porcie ${port}`)
})


function readUsersFile(){
    try{
        const data = fs.readFileSync("data.json", "utf8");
        return JSON.parse(data);
    } catch(error){
        console.error("Ni dziala", error);
        return [];
    }
}

function writeUsersFile(data)
{
    try{
        fs.writeFileSync("data.json", JSON.stringify(data),"utf8");
        return true;
    } catch(error){
        console.error("Ni dziala", error);
        return false;
    }
}