"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    console.log(router);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, username, password }),
            });
            const data = await response.json();
            if (response.ok) {
                console.log("Register successful!", data);
                localStorage.setItem('token', data.token);
                router.push('/dashboard');

            }
        } catch(error) {
            console.error(error);

        }
       

    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-black mb-6">Register</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
            <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

          <div className="mb-4"> 
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username:</label>
            <input type="text" id="username" className="w-full px-4 py-2 border border-gray-300 rounded-md" value={username} onChange={(e) => setUsername(e.target.value)}/>
            
        </div>
        <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password:</label>
            <input type="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-md" value={password} onChange={(e) => setPassword(e.target.value)}/>
            
        </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">Register</button>
        </form>
        </div>
    );
    }

    export default RegisterPage;