import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Friend'}],

});

// checks if User model already exists
// if not, registers it with mongoose and exports the model
export default mongoose.models.User || mongoose.model('User', UserSchema);