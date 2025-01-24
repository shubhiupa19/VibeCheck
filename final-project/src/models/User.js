import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "Friend" }],
  recentInteractions: [
    {
      friendId: { type: mongoose.Schema.Types.ObjectId, ref: "Friend" },
      friendName: { type: String, required: true },
      date: { type: Date, required: true },
      activity: { type: String, required: true },
      newDetail: { type: String },
      rating: { type: Number, min: 1, max: 5, required: true },
      emoji: { type: String, default: "👍" },
    },
  ],
});

// checks if User model already exists
// if not, registers it with mongoose and exports the model
export default mongoose.models.User || mongoose.model("User", UserSchema);
