import { Request, Response } from "express";
import User from "../models/user.model";

const getAllUsers = async (req: Request, res: Response) => {
  console.log("This is to user controllers");
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });
    if (existingUser) {
      return res.status(200).send;
    }
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error creating new user" });
  }
};

export { getAllUsers, createUser };
