"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import jwt from "jsonwebtoken";
import { set } from "mongoose";
const DashboardPage = () => {
  const [friends, setFriends] = useState([]);
  const [recentInteractions, setRecentInteractions] = useState([]);
  const [username, setUsername] = useState("");
  const fetchFriends = async () => {
    try {
      const response = await fetch("/api/friends", {
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

  const fetchRecentInteractions = async () => {
    try {
      const response = await fetch("/api/recentInteractions", {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if(response.ok){
        setRecentInteractions(data);
      }
      else {
        console.error("Error with fetching recent interactions");
      }
    } catch(error) {
      console.error(error);
    }
  }

  const fetchUsername = () => {
    const token = localStorage.getItem("token");
    const decoded = jwt.decode(token);
    const username = decoded.username;
    console.log(username);
    return username;
  }

  

  useEffect(() => {
    fetchFriends();
    fetchRecentInteractions();
    setUsername(fetchUsername());
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-5xl font-bold mb-5">{`Welcome to VibeCheck, ${username}!`}</h1>
      <Link href="/add">
        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded">
          {" "}
          Add Friend
        </button>
      </Link>
      <h3 className="mt-4 text-xl">Your Friends</h3>
      <ul className="list-disc">
        {friends.map((friend) => (
          <li key={friend._id}>
            <Link href={`/friend/${friend._id}`}>
            <h4 className="hover:underline text-green-500">{friend.name}</h4>
            </Link>
          </li>
        ))}
      </ul>
      <h3 className="mt-4 text-xl mb-2">Recent Interactions</h3>
      <ul className="list-disc">
        {recentInteractions.map((interaction) => (
          <li key={interaction._id}>
            <h4>{`${interaction.activity} with ${interaction.friendName} on ${format(new Date(interaction.date), 'MMMM do, yyyy')}`}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
