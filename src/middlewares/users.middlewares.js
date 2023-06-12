const {body, validationResult } = require('express-validator')
const User = require('../models/users.model')

exports.validUser = async(req, res, next) => {
    try {
        const {id} = req.params
        const user  = await User.findOne({
            where:{
                id,
                status: 'active'
            }
        })
        if(!user){
            return res.status(404).json({
                status: "error",
                message: `user with id ${id} not found 😢`
            })
        }

        req.user  = user;

    } catch (error) {
        console.log(error)
    }

    next();
}