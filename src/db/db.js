import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const dbConnection = async () => {
  try {
    const connect = await mongoose.connect(
      `${process.env.DATABASES_URI}/${DB_NAME}`
    );
    console.log(`MongoDB connected ${connect.connection.host} connection.host`);
  } catch (error) {
    console.log("databases connectes faild");
    process.exit(1);
  }
};
export default dbConnection;
