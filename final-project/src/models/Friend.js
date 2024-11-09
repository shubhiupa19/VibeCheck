import mongoose from 'mongoose';

const FriendSchema = new mongoose.Schema({
    name: { type: String, required: true },
    about: { type: [String], required: true },
    interactions: [{ 
        date: { type: Date, required: true},
        activity: { type: String, required: true},
        newDetail: { type: String },
        rating: { type: Number, min: 1, max: 5, required: true},
        emoji: { type: String, default: '👍' },
    }],
    createdAt: { type: Date, default: Date.now },
});


// checks if friend already exists, if it does, returns that
// if not, registers it with mongoose and exports the model
const Friend = mongoose.models.Friend || mongoose.model('Friend', FriendSchema);

export default Friend;