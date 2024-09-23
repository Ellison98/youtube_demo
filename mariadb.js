// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
	host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'YouTube',
    dateStrings: true
});

// Simple SELECT query
try {
    const [results, fields] = await connection.query('SELECT * FROM users');
    var { id, email, name, create_at } = results[0];
    console.log(id);
    console.log(email);
    console.log(name);
    console.log(create_at);
} catch (err) {
    console.error(err);
}