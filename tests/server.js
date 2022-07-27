const express = require('express');
const app = express();
const port = 3000;


// SET STATICS 
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.get("/lib/imageSelector.js", (req,res)=>
{
    res.sendFile(__dirname + "/lib/imageSelector.js");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));