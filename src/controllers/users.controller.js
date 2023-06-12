const User = require('../models/users.model')

//!exports without id
exports.findAllUsers = async(req, res) =>{
    try {

      const users = await User.findAll({
        where:{
          status: 'active',
        },
      })

        res.status(200).json({
            status: "succes",
            message: "this all the active users 😎",
            users
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: "Something went very wrong 😢",
        })
    }
}

//!exports with id

exports.findOneUser = async (req, res) => {
    try {
      const { id } = req.params;
  
      const user = await User.findOne({
        where: {
          id,
          status: 'active',
        },
      });
  
      if (!user) {
        return res.status(404).json({
          status: 'error',
          message: 'User not found 😢',
        });
      }
  
      return res.status(200).json({
        status: 'success',
        message: 'User retrieved successfully 😎',
        user
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

        const user = await User.findOne({
          where: {
            id,
            status: 'active'
          }
        })

        if(!user){
          return res.status('404').json({
            status: 'error',
            message: 'User with id: ${id} not found 😢'
          })
        }

        await user.update({
          status: 'disabled',
          message: 'user has been disabled'
        })

        res.status(200).json({
            status: "succes",
            message: "user has been deleted 😎" 
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: "Something went very wrong 😢",
        })
    }
}

exports.updateUser = async(req, res) =>{
  try {

    const {id} = req.params;
    const {name, description} = req.body;

    const user = await User.findOne({
      where:{
        id,
        status: 'active'
      },
    })

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `User with id: ${id} not found 😢`,
      });
    }

    user.update({name, description})

      res.status(200).json({
          status: "succes",
          message: "user info has been updated 😎",
          user
      })

  } catch (error) {
      console.log(error);
      res.status(500).json({
          status: "fail",
          message: "Something went very wrong 😢",
      })
  }
}