/**
 * Get the filename and directory name of the current module.
 * 
 * `__filename` is the full path of the current module file.
 * `__dirname` is the directory name of the current module file.
 */
import './config.mjs'
import express from 'express'
import session from 'express-session';
import path from 'path'
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import './db.mjs';
import cors from 'cors';




// create a new express application
const app = express();

// using cors bc the frontend and backend are on different ports
app.use(cors());


// middleware to parse JSON bodies
app.use(express.json());

// getting the filename and directory name of the current module, 
// so we can use them to serve static files
// not sure if i need to use this yet, since the frontend will be in react
// and will thus render the html and css files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const Friend = mongoose.model('Friend');
const User = mongoose.model('User');


// middleware that serves static file
app.use(express.static(path.join(__dirname, 'public')));
// middlware that parses url-encoded bodies coming in through the request
app.use(express.urlencoded({ extended: false }));
// middleware that keeps track of sessions
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}));

app.post('/friends', async (req, res) => {
    // console.log("body", req.body);
    const { name, about } = req.body;
    console.log("about", about);
    try {
        const friend = new Friend ({ name, about});
        await friend.save();
        
        res.status(201).json(friend);

    } catch(error) {
        console.log("error saving friend")
        res.status(500).json( { message: error.message });
    }
})



app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running... on port', process.env.PORT);
});
