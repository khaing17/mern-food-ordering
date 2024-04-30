import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./routes/v1";
const app = express();

/**
 * Here's all the middleware lied
 */

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(cors());

//Test middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(new Date().toISOString());
  next();
});

/**
 * Register all routes
 */

//API version 1
app.use("/api/v1", routes);

export default app;
