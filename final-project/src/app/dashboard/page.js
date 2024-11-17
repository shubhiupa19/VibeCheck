"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
const DashboardPage = () => {
  const [friends, setFriends] = useState([]);

  const fetchFriends = async () => {
    try {
      const response = await fetch("api/friends", {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        setFriends(data);
      } else {
        console.error("Error with fetching friends");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFriends();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-5xl font-bold mb-5">Welcome to VibeCheck!</h1>
      <Link href="/add">
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
          {" "}
          Add Friend
        </button>
      </Link>
      <h3 className="mt-4 text-xl">Your Friends</h3>
      <ul>
        {friends.map((friend) => (
          <li key={friend._id}>
            <h4>{friend.name}</h4>
          </li>
        ))}
      </ul>
      <h3 className="mt-4 text-xl">Recent Interactions</h3>
    </div>
  );
};

export default DashboardPage;
