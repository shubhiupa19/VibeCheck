"use client"
import FriendForm from "../components/FriendForm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AddFriendPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-start p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Friend</h1>
      <FriendForm />
    </div>
  );
};

export default AddFriendPage;
