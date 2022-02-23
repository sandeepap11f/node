const express =require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Samarth welcomes you, Visit this channel subscibe like and comment :" + "https://www.youtube.com/channel/UC8Zj85-AIoWS2fk4PQE1PPA");
});

const port = process.env.port || 3000;

app.listen(port, () => {
console.log("hey")
});
