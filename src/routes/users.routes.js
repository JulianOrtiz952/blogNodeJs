const userController = require('../controllers/users.controller');
const express = require('express');

const router = express.Router();

//create a route get
router.get('/', userController.get);

//routes with id

router.route('/:id').get(userController.findOneUser).delete(userController.deleteUser)

module.exports = router