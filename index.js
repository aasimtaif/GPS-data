
const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 4114;
const app = express()
const cors = require("cors");


var corsOptions = {
    origin: ["*","http://localhost:3000"],
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Hello World! on ${PORT}`);
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});