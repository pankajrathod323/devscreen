import express from "express";
import {ENV} from "./lib/env.js";
import path from "path";
import { connectDb } from "./lib/db.js";

const app = express();
const PORT = ENV.PORT || 3000;
const __dirname = path.resolve();
app.use(express.json());

app.get("/",(req, res) =>{
  res.status(200).json({msg:"api successful"});
});

app.get("/hello",(req, res) =>{
  res.status(200).json({msg:"How are you"});
});

app.get("/money",(req, res) =>{
  res.status(200).json({msg:"You will earn money"});
});

if (ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get(/.*/, (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    })
}

const startServer = async () => {
   try {
      await connectDb();
      app.listen(PORT, () => {
         console.log(`Server is running on port ${PORT}`);
      });
   }
   catch(error) {
        console.error("Error starting server", error);
   }
}

startServer();
