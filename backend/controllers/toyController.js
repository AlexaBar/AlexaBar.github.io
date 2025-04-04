import toyModel from "../models/toyModel.js";
import fs from 'fs'


//add toy item

const addToy = async (req,res) => {
    try{

    let image_filename = `${req.file.filename}`

    const toy = new toyModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename,
    })
    
        await toy.save();
        res.json({success:true,message:"Toy Added"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }


}

// all toy list
const listToy = async (req, res) => {
    try {
        const toys = await toyModel.find({});
        res.json({ success: true, data:toys })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}
// delete toy
const removeToy = async (req, res) => {
    try {

        const toy = await toyModel.findById(req.body.id);
        fs.unlink(`uploads/${toy.image}`, () => { })

        await toyModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Toy Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export { listToy, addToy, removeToy }