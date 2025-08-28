// require('dotenv').config({path: './.env'});
import dotenv from "dotenv";
import connectDB from "./db/index.db.js";

dotenv.config({ path: './env' });
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection failed !!", err);
})







// ( async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     } catch (error) {
//         console.log("Error in DB connection", error);
//     }
// })();
