require('dotenv').config()
const express = require("express");
const cors = require("cors");
const productRoute = require("./routes/productRoute.js");

const app = express();

app.use(productRoute);

app.use(express.json());
app.use(cors());




app.listen(8800, () => console.log('Server Rodando na porta 8800'));
