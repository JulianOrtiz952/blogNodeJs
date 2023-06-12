const {body, validationResult } = require('express-validator')

const validFields = (req, res, next) =>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status({
            status: "error",
            errors: errors.mapped(),
        })
    }

    next();
}

exports.createUserValidation = [
    body('name').notEmpty().withMessage('name cannot be empty'),
    body('email').notEmpty().withMessage('email cannot be empty').isEmail().withMessage('must be a valid email'),
    body('password').notEmpty().withMessage('password cannot be empty').isLength({min: 8}).withMessage('password must be at least 8 characters long'),
    body('description').notEmpty().withMessage('description cannot be empty'),
    validFields
]

exports .loginUserValidation = [];

//validar
//name, email, password, description