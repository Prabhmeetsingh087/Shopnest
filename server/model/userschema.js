import mongoose from "mongoose";

const Userschema = new mongoose.Schema({

  firstname:{

    type: String,
    required: true,
    trim: true,
    min:5,
    max:20

  },
  lastname:{

    type: String,
    required: true,
    trim: true,
    min:5,
    max:20

  },
  username:{

    type: String,
    required: true,
    trim: true,
    unique:true,
    index: true,
    lowercase:true

  },
  email:{

    type: String,
    required: true,
    trim: true,
    unique:true,

  },

  password:{

    type: String,
    required: true

  },
  phone:{

    type: String,
    required: true
   
  }
   



});

const User = mongoose.model('User', Userschema);

//The mongoose.model('User', UserSchema); call returns the User model class,
// which you can use to interact with the users collection in MongoDB.

export default User;