//exports without id
exports.get = async(req, res) =>{
    try {
        res.status(200).json({
            status: "succes",
            message: "user has been getters 😎"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: "Something went very wrong 😢",
        })
    }
}

//exports with id

exports.findOneUser = async (req, res) => {
    try {
      const { id } = req.params;
  
    //   const user = await User.findOne({
    //     where: {
    //       id,
    //       status: 'available',
    //     },
    //   });
  
    //   if (!user) {
    //     return res.status(404).json({
    //       status: 'error',
    //       message: 'User not found 😢',
    //     });
    //   }
  
      return res.status(200).json({
        status: 'success',
        message: 'User retrieved successfully 😎' + id
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: 'error',
        message: 'Error retrieving user 😢',
      });
    }
  };

exports.deleteUser = async(req, res) =>{
    try {

        const { id } = req.params;

        res.status(200).json({
            status: "succes",
            message: "user has been deleted 😎" + id
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: "Something went very wrong 😢",
        })
    }
}