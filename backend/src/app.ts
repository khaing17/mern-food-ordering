import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

/**
 * Here's all the middleware lied
 */

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({
    message: "Hello from server!",
  });
});

app.listen(7000, () => {
  console.log("server listen of port 7000");
});

export default app;
