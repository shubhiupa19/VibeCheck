import mongoose from "mongoose";

export default async function dbConnect() {
mongoose.connect(process.env.DSN)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error(error));

}


