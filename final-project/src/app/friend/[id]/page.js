"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const FriendPage = () => {
  // instantiating the router object
  const router = useRouter();
  // setting up the state for the friend object
  const [friend, setFriend] = useState({});
  // extracting the id from the router object by using the query object to get the id
  const { id } = router.query;

  const fetchFriend = async () => {
    try {
      // fetch the friend by using the id we extracted from the router object
      const response = await fetch(`api/friends/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        setFriend(data);
      } else {
        console.error("Error with fetching friend");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchFriend();
    }
  }),
    [id];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1>{friend.name}</h1>
      <h4>{friend.about}</h4>
      <li>
        {friend.interactions.map((interaction) => (
          <div>
            <p>{interaction.date}</p>
            <p>{interaction.activity}</p>
          </div>
        ))}
      </li>
    </div>
  );
};

export default FriendPage;
