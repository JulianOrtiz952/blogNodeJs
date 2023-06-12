const userController = require('../controllers/users.controller');
const express = require('express');

const router = express.Router();

const userMiddleWare = require('../middlewares/users.middlewares')

//create a route get
router.get('/',userController.findAllUsers);

//routes with id

router.route('/:id')
.get(userMiddleWare.validUser, userController.findOneUser)
.delete(userMiddleWare.validUser, userController.deleteUser)
.patch(userMiddleWare.validUser, userController.updateUser)

module.exports = router