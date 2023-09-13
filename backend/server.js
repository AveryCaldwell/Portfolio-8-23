const express = require('express');
const cors = require('cors'); // Import the cors middleware
const mysql = require('mysql');
const app = express();

// Express middleware
app.use(express.json());
// Enable CORS for all origins (or specify your frontend URL)
app.use(cors);

// Testing response
app.get('/', (req, res) => {
	res.send('Hello, server is up.');
});


db.connect((err) => {
	if (err) {
		console.error('Error connecting to the database: ' + err.message);
	} else {
		console.log('Connected to the contact_db database.');
	}
});

// Define a POST route to handle form submissions
app.post('/api/contact', (req, res) => {
	const { name, email, comment } = req.body;

	// Insert the form data into the database
	const sql = 'INSERT INTO contacts (name, email, comment) VALUES (?, ?, ?)';
	db.query(sql, [name, email, comment], (err, result) => {
		if (err) {
			console.error(
				'Error inserting data into the database: ' + err.message
			);
			res.status(500).json({ error: 'Internal server error' });
		} else {
			console.log('Data inserted into the database.');
			res.status(200).json({ message: 'Data inserted successfully' });
		}
	});
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

const connection = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
	tls: {
		rejectUnauthorized: false,
	},
});

connection.connect((err) => {
	if (err) throw err;
});
