// copy code
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "./public"))); 


app.get("/anything", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "blank.html"));
});

app.get('/user/:variable', function(req, res) {
    const variable = req.params.variable;
    res.send(`<html><body><h1>${variable}</h1></body></html>`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
