// import express from 'express';
const express = require('express')

const userRouter = express.Router();
// import userController from '../controllers/userController';
const userController = require('../controllers/userController')

userRouter.post('/signup', userController.createUser , (req, res) => {
  return res.sendStatus(200);
});

userRouter.post('/login', userController.getUser, (req, res) => {
  return res.sendStatus(200);
});

userRouter.get('/profile', (req, res) => {
  return res.sendStatus(200);
});

userRouter.get('/home', (req, res) => {
  return res.sendStatus(200);
});

// export default userRouter;
module.exports = userRouter;