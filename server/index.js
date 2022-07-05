const express = require('express');
const cors = require("cors");


const app = express();

app.use(express.json()); //middleware
app.use(cors()); //middleware



app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
});

app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3> It was ${req.params.temperature} today </h3>`;
    res.status(200).send(phrase);
})
// same as above but destructured
// app.get("/weather/:temperature", (req, res) => {
//     const {temperature} = req.params;
//     const phrase = `<h3> It was ${temperature} today </h3>`;
//     res.status(200).send(phrase);
// })

app.listen(4000, () => {
    console.log("We're in at 4000 boys")
})