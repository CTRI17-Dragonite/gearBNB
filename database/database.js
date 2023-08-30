const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    // host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'gearbnb'
});

connection.connect((error) => {
    if (error) {
        console.log('Error connecting to the database: ', error);
    } else {
        connection.query("SELECT * FROM Users", (err, result, fields) => {
            if (err) {
                console.log('Error in the query', err)
            } else {
                console.log(result)
            }
        })
        console.log('Connected to the Database')
    }
});


module.exports = connection;