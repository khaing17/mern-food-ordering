import mongoose from "mongoose";
import app from "./src/app";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const DB = process.env.DB as string;

const port = process.env.PORT || 8000;

mongoose
  .connect(DB)
  .then((con) => {
    console.log(con.connection.host);
    console.log("Database connection established!");
  })
  .catch((error) => {
    console.log("Database connection failed!");
    console.error(error.message);
  });

const server = app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
