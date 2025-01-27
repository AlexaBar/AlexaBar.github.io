import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://alexandravacarita87:alexandravacarita87@cluster0.gzqp5.mongodb.net/kidprof').then(()=>console.log("DB Connected"));
}


