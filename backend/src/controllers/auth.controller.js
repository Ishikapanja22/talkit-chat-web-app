const User = require('../models/User');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const generateToken = (id) => {

  return jwt.sign(
    {id},
    process.env.JWT_SECRET,
    {
      expiresIn:'7d'
    }
  );

};

exports.register = async(req,res)=>{

  try{

    const {

      name,

      email,

      password

    } = req.body;

    const existingUser =

      await User.findOne({ email });

    if(existingUser){

      return res.status(400).json({

        message:'User Already Exists'

      });

    }

    const user =
      await User.create({

        name,

        email,

        password

      });

    res.status(201).json({

      message:'Registered Successfully',

      user

    });

  }
  catch(error){

    res.status(500).json({

      message:error.message

    });

  }

};

exports.login = async(req,res)=>{

  try{

    const {

      email,

      password

    } = req.body;

    const user =
      await User.findOne({ email });

    if(!user){

      return res.status(401).json({

        message:'User Not Found'

      });

    }

    if(user.password !== password){

      return res.status(401).json({

        message:'Wrong Password'

      });

    }

    res.json({

      user,

      token:'demo-token'

    });

  }
  catch(error){

    res.status(500).json({

      message:error.message

    });

  }

};