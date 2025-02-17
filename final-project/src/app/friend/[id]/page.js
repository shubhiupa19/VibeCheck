"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import LineChart from "@/app/components/LineChart";

const FriendPage = () => {
  // instantiating the router object
  const router = useRouter();
  // setting up the state for the friend object
  const [friend, setFriend] = useState({ interactions: [] });

  // extracting the id from the URL using useParams hook, which extracts the id/params from the URL
  // https://nextjs.org/docs/app/api-reference/functions/use-params
  const { id } = useParams();

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
        console.log("Error with fetching friend");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
    fetchFriend();
  }, [id]);

  const labels = friend.interactions.map((interaction) =>
    format(new Date(interaction.date), "MM/dd/yyyy")
  );
  const data = friend.interactions.map((interaction) => interaction.rating);

  return (
    <div className="relative h-screen bg-white">
      <div className="absolute top-4 left-4">
        <Link href="/dashboard">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mt-2 ">
            Back to Dashboard
          </button>
        </Link>
      </div>
      <div className="absolute top-4 right-4">
        <Link href={`/friend/${id}/add-interaction`}>
          <button className="mb-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg">
            Add Interaction
          </button>
        </Link>
      </div>
      <div
        className="flex flex-col items-center justify-center bg-white"
        style={{ paddingTop: "8rem" }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mt-4">{friend.name}</h1>

        <h4 className="text-lg text-gray-600 mb-6 italic">
          {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray */}
          {Array.isArray(friend.about) && friend.about.length > 0 ? (
            <span className="text-gray-500">{friend.about.join(", ")}</span>
          ) : (
            <span className="text-gray-500">No details available</span>
          )}
        </h4>

        <ul className="w-full max-w-2xl space-y-4">
          {friend.interactions?.length > 0 ? (
            friend.interactions.map((interaction) => (
              <li
                key={interaction.date}
                className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md"
              >
                <div className="flex flex-col space-y-2">
                  <p className=" text-gray-700">
                    <span className="font-semibold">Date: </span>
                    {format(new Date(interaction.date), "MM/dd/yy")}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Activity: </span>
                    {interaction.activity}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Rating: </span>
                    {interaction.rating}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Emoji: </span>
                    {interaction.emoji}
                  </p>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-center">No interactions found.</p>
          )}
        </ul>
        {/* creating a line chart with ratings on the y-axis and dates on x-axis */}
        <div className="mt-8 w-full max-w-2xl">
          <LineChart ratings={data} dates={labels} />
        </div>
      </div>
    </div>
  );
};

export default FriendPage;
