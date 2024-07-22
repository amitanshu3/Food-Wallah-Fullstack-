import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoutes.js';

import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';



//app config
const app=express();
const port=process.env.PORT||4000;

//middleware
app.use(express.json());
app.use(cors());
//db connceion
connectDB()
//api endpoint
app.use("/api/food",foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);







app.get("/",(req,res)=>{
   res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on localhost ${port}`);
})

//mongodb+srv://coder:coder@123@cluster0.doos3ga.mongodb.net/

//mongodb+srv://coder:<password>@cluster0.doos3ga.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0