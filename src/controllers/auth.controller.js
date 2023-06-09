exports.signup = async(req, res) =>{
    try {
        res.status(200).json({
            status: "succes",
            message: "user has successfully registered"
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
            message: "user has successfully entered"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: "Something went very wrong 😢",
        })
    }
}