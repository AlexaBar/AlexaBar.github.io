import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import toyRouter from "./routes/toyRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


//app config
const app = express()
const port = process.env.PORT || 5175;

//middleware
app.use(express.json())//when we will have a request frontend to backend
app.use(cors())//we can access the backend from any frontend

//db connection
connectDB();

//api endpoints
app.use("/api/toy",toyRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order",orderRouter);
//we use the GET methode
app.get("/",(req,res)=>{
    res.send("API Working");
}) 

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})

