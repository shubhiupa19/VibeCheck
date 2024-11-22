"use client";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const FriendPage = () => {
  // instantiating the router object
  // const router = useRouter();
  // setting up the state for the friend object
  const [friend, setFriend] = useState({});

  // const id = router.query?.id;

  const fetchFriend = async () => {
    try {
      // fetch the friend by using the id we extracted from the router object
      const response = await fetch(`/api/friends/673a80107ef8c4bf3e5b3b0b`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Friend fetched successfully!", data);
        setFriend(data);
      } else {
        console.error("Error with fetching friend");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFriend();
  }),
    [];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1>{friend.name}</h1>
      <h4>{friend.about}</h4>
      <ul>
        {friend.interactions
          ? friend.interactions.map((interaction) => (
              <li key={interaction.date}>
                <div>
                  <p>{interaction.date}</p>
                  <p>{interaction.activity}</p>
                </div>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default FriendPage;
