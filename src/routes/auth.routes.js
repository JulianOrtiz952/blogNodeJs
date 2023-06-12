const authController = require('../controllers/auth.controller');
const express = require('express');

//middlewares
const validationMiddleware = require('../middlewares/validations.middleware');

const router = express.Router();

//create a route post with name ./signup 
router.post(
    '/signup',
    validationMiddleware.createUserValidation,
    authController.signup
 )

//create a route post with name ./login
router.post('/login', authController.login);

module.exports = router