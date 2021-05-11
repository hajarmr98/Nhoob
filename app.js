const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const nodemailer = require("nodemailer");


const app = express();
app.use(bodyParser.json());
app.use(express());
app.use(cors());
const port = process.env.port || 8080;


app.get('/', (req, res) => {
	let chiste1="Nhoob.com -> Wipergaming.com"
	res.send(chiste1);
});

app.listen(port, () => console.log(`Escuchando por el puerto ${port} :)`));
