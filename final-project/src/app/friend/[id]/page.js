"use client";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const FriendPage = () => {
  // instantiating the router object
  // const router = useRouter();
  // setting up the state for the friend object
  const [friend, setFriend] = useState({ interactions: []});

  // extracting the id from the URL using useParams hook, which extracts the id/params from the URL
  const { id } = useParams();

  // const id = router.query?.id;

  const fetchFriend = async () => {
    try {
      // fetch the friend by using the id we extracted from the router object
      const response = await fetch(`/api/friends/${id}`, {
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
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{friend.name}</h1>
      <h4 className="text-lg text-gray-600 mb-6 italic">{friend.about}</h4>
      <ul className="w-full max-w-2xl space-y-4">
        {friend.interactions.length > 0 ? (
          friend.interactions.map((interaction) => (
            <li
              key={interaction.date}
              className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col space-y-2">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Date:</span>
                  {interaction.date}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Activity:</span>
                  {interaction.activity}
                </p>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center">No interactions found.</p>
        )}
      </ul>
    </div>
  );
};

export default FriendPage;
