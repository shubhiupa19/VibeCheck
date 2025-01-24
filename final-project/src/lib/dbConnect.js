import mongoose from "mongoose";

// super simple, just connects to the database using the DSN from the .env file
// uses then and catch to indicate success or error
export default async function dbConnect() {
mongoose.connect(process.env.DSN)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log(error));

}


