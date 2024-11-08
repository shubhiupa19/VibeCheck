"use client";

import { useState } from 'react';

const FriendForm = () => {
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');

    const handleSubmit = async (e) => { 
        e.preventDefault();
        try {
        const response = await fetch('api/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, about: about.split(',') }),
        });
        const data = await response.json();
        if (response.ok) {
            console.log(data);
            setName('');
            setAbout('');
        }
        else {
            console.error(data);
        }
    } catch (error) {
        console.error(error);
    }
    };

    // for padding: https://v2.tailwindcss.com/docs/padding
    // for margin: https://v2.tailwindcss.com/docs/margin
    // for rounding: https://v2.tailwindcss.com/docs/border-radius
    // for width stuff: https://v2.tailwindcss.com/docs/max-width


    return (
        <div className="flex items-center">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name: </label>
                <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </div>
            <div className="mb-3">
                <label htmlFor="about" className="block text-gray-700 font-semibold mb-2">About Friend (comma-separated): </label>
                <input
                    type="text"
                    id="about"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md "
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md">Add Friend</button>
            </form>
            </div>
    );
};

export default FriendForm;