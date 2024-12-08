"use client"
import FriendForm from "../components/FriendForm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AddFriendPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <div>
        <div className="absolute top-4 left-4">
        <Link href="/dashboard">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mt-2 ">
            Back to Dashboard
          </button>
        </Link>
      </div>
    
    <div className="flex flex-col items-center justify-start p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Friend</h1>
      <FriendForm />
    </div>
    </div>
  );
};

export default AddFriendPage;
