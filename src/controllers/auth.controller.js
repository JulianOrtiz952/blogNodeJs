const User = require('../models/users.model');

exports.signup = async(req, res) =>{
    try {
        const {name, email, password, description} = req.body;

        const user = await User.create({name, email, password, description});

        res.status(200).json({
            status: "succes",
            message: "user has been successfully created:😎",
            user,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: "Something went very wrong 😢",
        })
    }
}

exports.login = async(req, res) =>{
    try {
        res.status(200).json({
            status: "succes",
            message: "user has successfully entered 😎"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: "Something went very wrong 😢",
        })
    }
}