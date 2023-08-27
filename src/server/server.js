import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

    
app.get("/",(req, res) => {
        res.status(200).json("Hello World!");
});

app.listen(3000, () => {
  console.log("Server listening on port " + 3000);
});