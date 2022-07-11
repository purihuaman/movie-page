const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.get('/peliculas', (req, res) => {});

app.listen(process.env.PORT, () => {
	console.log('App corriendo en el puerto' + process.env.PORT);
});
