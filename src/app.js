import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
// Configurations
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// https://hitesh choudhary.com => space = %20/+
app.use(express.urlencoded({ extended: true }));

app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));
// To do CRUD operation on cookies
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);


// http://localhost:8000/api/v1/users/register
export { app };

// use method: used for middlewares and configurations
