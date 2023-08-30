// import express from 'express';
const express = require('express')

const itemRouter = express.Router();

itemRouter.post('/', (req, res) => {
  return res.sendStatus(200);
});

itemRouter.post('/', (req, res) => {
  return res.sendStatus(200);
});

itemRouter.get('/', (req, res) => {
  return res.sendStatus(200);
});

itemRouter.get('/', (req, res) => {
  return res.sendStatus(200);
});

// export default itemRouter;
module.exports = itemRouter;