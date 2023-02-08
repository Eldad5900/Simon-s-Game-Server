import express, { json, Router } from "express";
import User from "../../Models/Score/user.js";

export  const userRouter = express.Router();

userRouter.patch("/change-the-score", async (req, res) => {
    try {
      const updatedData = req.body;
      const result = await User.findOneAndUpdate(updatedData);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  userRouter.post("/addIteam", async (req, res) => {
    try {
      const {score} = req.body;
      const userScore = new User({
       score:0,
      });
      const savedData = await userScore.save();
      res.status(200).json({savedData});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
});

  userRouter.get("/get-score", async (req, res) => {
    try {
      const data = await User.findOne();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



export default  userRouter ;