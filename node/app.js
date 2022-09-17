const express = require("express");
const app = express();

app.get("/add", function(req, res){
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    let c = (a + b).toString();
    res.send(c);
})

app.listen(process.env.PORT || 3000, function() {
    console.log("port 3000");
})
