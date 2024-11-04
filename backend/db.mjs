import mongoose from 'mongoose';

mongoose.connect(process.env.DSN)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error(error));


const UserSchema = new mongoose.Schema({
    username: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Friend'}],
});

const FriendSchema = new mongoose.Schema({ 
    // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    name: { type: String, required: true},
    about: [ { type: String }],
    interactions: [{ 
        date: { type: Date, required: true},
        activity: { type: String, required: true},
        newDetail: { type: String },
        rating: { type: Number, min: 1, max: 5, required: true},
    }],
    createdAt: { type: Date, default: Date.now }
});

// registering the models
mongoose.model('User', UserSchema);
mongoose.model('Friend', FriendSchema);

// export the models

