import mongoose from "mongoose";

let cached;

const mongoConnect = async () => {
   if (cached) {
      return cached;
   }

   return await new Promise((resolve) => {
      // Check if the website is under development
      const URI = process.env.MONGO_URI

      mongoose.connect(URI).then((mongoose) => {
         cached = mongoose;
         resolve(cached);
      });
   });
};

export default mongoConnect;
