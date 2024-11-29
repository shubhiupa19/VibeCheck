"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const AddInteractionPage = () => {
  const router = useRouter();
  const id = useParams().id;
  const [date, setDate] = useState("");
  const [activity, setActivity] = useState("");
  const [newDetail, setNewDetail] = useState("");
  const [rating, setRating] = useState(0);
  const [emoji, setEmoji] = useState("");
  const [friendName, setFriendName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/friends/${id}/interactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date, activity, newDetail, rating, emoji }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Interaction added successfully!", data);
        router.push(`/friend/${id}`);
      } else {
        console.error("Error with adding interaction");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchFriend = async () => {
      try {
        const response = await fetch(`/api/friends/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setFriendName(data.name);
        } else {
          console.error("Error with fetching friend");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchFriend();
  }, [id]);
  // run only when the id changes

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-2xl font-bold mb-4">Add Interaction for {friendName}!!</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded border-2-black">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full border border-black rounded-md focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Activity
          </label>
          <input
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="mt-1 block w-full border border-black rounded-md shadow-sm focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Details Learned (if any)
          </label>
          <input
            type="text"
            value={newDetail}
            onChange={(e) => setNewDetail(e.target.value)}
            className="mt-1 block w-full border border-black rounded-md shadow-sm focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mood Rating:
            <span className="font-bold text-blue-600">{rating}</span>
          </label>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full appearance-none h-2 bg-gray-200 rounded-lg overflow-hidden border border-black"
          />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>1</span>
            <span>3</span>
            <span>5</span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Emoji
          </label>
          <input
            type="text"
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
            className="mt-1 block w-full rounded-md shadow-sm  focus:border-blue-500 border border-black"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddInteractionPage;
