// import User from "../model/userschema.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const JWT_SECRET = process.env.JWT_SECRET || "PRABHMEET";

// export const usersignup = async (request, response) => {
//   try {
//     // console.log(request.body.phone);
//     const exist = await User.findOne({ username: request.body.username });
//     if (exist) {
//         return response.status(401).json({ message: "username already exist" });
//     } else {
//         console.log(request.body.phone);
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ ...req.body, password: hashedPassword });
//       const user = request.body;
//       // const newuser = new User(user);
//       await newUser.save();

//       response.status(200).json({ message: user });
//     }
//   } catch (error) {
//     response.status(500).json({ message: error.message });
//   }
// };

// export const userlogin = async(request, response)=>{

//   try {
//           const username= request.body.username;
//           const password = request.body.password;

//           const user = await User.findOne({ username });
//           if(user){
//            const isMatch = await bcrypt.compare(password, user.password);
//            return response.status(200).json({ data: user});


//           }

//           else{
//            return response.status(401).json('invalid login');

//           }
//   } catch (error) {
//     response.status(500).json('error', error.message);
//   }
  





// }

// export default usersignup;


import User from "../model/userschema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "PRABHMEET";

export const usersignup = async (request, response) => {
  try {
    const { username, phone, password } = request.body;

    const exist = await User.findOne({ username });
    if (exist) {
      return response.status(401).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ ...request.body, password: hashedPassword });
    await newUser.save();

    return response.status(200).json({ message: "Signup successful", data: newUser });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};


export const userlogin = async (request, response) => {
  try {
    const { username, password } = request.body;

    const user = await User.findOne({ username });
    if (!user) {
      return response.status(401).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return response.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return response.status(200).json({ message: "Login successful", data: { user, token } });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};
