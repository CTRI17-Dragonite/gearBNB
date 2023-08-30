const express = require('express');
const connection = require('../database/database')

const app = express();

const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
})

// routers go here

// app.get('/api', (req, res) => {
//   res.status(200).send('server is working')
// })

// app.get('/api', (req, res) => {
//   connection.connect((error) => {
//     if (error) {
//         console.log('Error connecting to the database: ', error);
//     } else {
//         connection.query("SELECT * FROM Users", (err, result, fields) => {
//             if (err) {
//                 console.log('Error in the query', err)
//             } else {
//                 console.log(result)
//             }
//         })
//         console.log('Connected to the Database')
//     }
// })
// })



app.use(express.static('../src/index.html'));


// catch-all route handler
app.use('*', (req, res) => {
  res.status(404).send('404 Not Found')
})

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));


module.exports = app;