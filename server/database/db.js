import mongoose from "mongoose";

export const Connection =async (USERNAME,PASSWORD)=>{


    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce-web.ek7jm7c.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web`;
   try{

    await mongoose.connect(URL);
    console.log("database connected successfully");



   } catch(error){


     console.log("error while connecting with db", error.message);



   }





}

export default Connection;