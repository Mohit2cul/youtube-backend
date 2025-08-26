// require('dotenv').config({path: './.env'});
import dotenv from "dotenv";
import connectDB from "./db/index.db.js";

dotenv.config({ path: './env' });
connectDB();







// ( async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     } catch (error) {
//         console.log("Error in DB connection", error);
//     }
// })();
