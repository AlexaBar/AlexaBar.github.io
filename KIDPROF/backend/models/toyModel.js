import mongoose from "mongoose";

const toySchema = new mongoose.Schema({
    name: {type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

const toyModel = mongoose.models.toy || mongoose.model("toy",toySchema);

export default toyModel;