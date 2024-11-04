import React, { useState } from 'react';

const AddFriendForm = () => {
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch('http://localhost:3000/friends', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, about: about.split(',')}),
        });
        const data = await response.json();
        if (response.ok) {
            console.log(data);
        }
    } catch (error) {
        console.error(error);
    }
};

return (
    <form onSubmit={handleSubmit} className="container mt-4">
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name: </label>
            <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />
        </div>
        <div className="mb-3">
            <label htmlFor="about" className="form-label">About Friend (comma-separated): </label>
            <input 
                type="text"
                id="about"
                className="form-control"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
            />
        </div>
        <button type="submit" className="btn btn-primary">Add Friend</button>
    </form>
);
};

export default AddFriendForm;
