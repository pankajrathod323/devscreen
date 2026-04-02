import express from "express";
import {ENV} from "./lib/env.js";
import path from "path";


const app = express();

const __dirname = path.resolve();

app.get("/",(req, res) =>{
  res.status(200).json({msg:"api successful"});
});

app.get("hello",(req, res) =>{
  res.status(200).json({msg:"How are you"});
});

app.get("/money",(req, res) =>{
  res.status(200).json({msg:"You will earn money"});
});


if (ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    })
}

app.listen(ENV.PORT || 3000, () => {
   console.log("server is running on port", ENV.PORT);
})