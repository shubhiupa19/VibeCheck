"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const FriendForm = () => {
  // variables to store the name and about of the friend
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const router = useRouter();

  // function to handle form submission
  const handleSubmit = async (e) => {
    // prevent the default form submission
    e.preventDefault();

    // grab the user's token from local storage
    const token = localStorage.getItem("token");

    try {
      // make a POST request to the server, and store the response in a variable called response
      // post contains the name and about of the friend
      const response = await fetch("api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, about: about.split(",") }),
      });
      // store the json data from the response in a variable called data
      const data = await response.json();
      // if the response is successulf (based on status code), log the data and reset the name and about
      if (response.ok) {
        console.log(data);
        router.push("/dashboard");
        setName("");
        setAbout("");
      }
      // if the response is not successful, give an error message
      else {
        console.error("Error with adding a friend");
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
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name:{" "}
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="about"
            className="block text-gray-700 font-semibold mb-2"
          >
            About Friend (comma-separated):{" "}
          </label>
          <input
            type="text"
            id="about"
            className="w-full px-4 py-2 border border-gray-300 rounded-md "
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md"
        >
          Add Friend
        </button>
      </form>
    </div>
  );
};

export default FriendForm;
