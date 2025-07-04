import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

console.log('this my env file',process.env.CORS_ORIGIN)
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(
  express.urlencoded({
    extende: true,
    limit: "16k",
  })
);
app.use(express.static("public"));
app.use(cookieParser());

// import router //

import userRouter from "./router/user.router.js";

// router declearaction //
app.use("/api/v1/users", userRouter);

export { app };
