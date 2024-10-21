import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { server } from "./app.js";
dotenv.config();

// ------------ PORT -----------
const PORT = process.env.PORT || 8000;

// --------- Database Connection ---------
connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed !!!", err);
  });
