const express = require('express');
import path from 'path'

const app = express();

const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers go here

app.get('/api', (req, res) => {
  res.status(200).send('server is working')
})





app.use(express.static(path.resolve(__dirname, '../src/index.html')));


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