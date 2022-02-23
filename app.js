const express =require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Samarth welcomes you to the exciting website");
});

const port = process.env.port || 3000;

app.listen(port, () => {
console.log("hey")
});
