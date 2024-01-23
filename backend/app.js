import express from "express"
import mongoose from "mongoose"
const app = express();
import router  from './routes/user-routes.js'
import blogRouter from "./routes/blog-routes.js";
import cors from 'cors'

app.use(cors({
  allowedHeaders: ["authorization", "Content-Type"], // you can change the headers
  exposedHeaders: ["authorization"], // you can change the headers
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false
}))
app.use(express.json())
app.use('/api/user',router)
app.use('/api/blog',blogRouter)

mongoose
 .connect(
  'mongodb+srv://zerbisrat:aP64m3sKhKclVm9X@cluster0.x97cvbp.mongodb.net/Blog1?retryWrites=true&w=majority'

 )
 .then(()=>app.listen(5000))
 .then(()=>
 console.log('connected to db'))
 .catch((err)=>console.log(err))