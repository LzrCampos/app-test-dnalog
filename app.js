const logger = require('./logger');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	logger.info('hello');
	res.status(200).json({ message: 'hello' });
});

app.listen(8080, () => {
	console.log('running in port 3000');
});
