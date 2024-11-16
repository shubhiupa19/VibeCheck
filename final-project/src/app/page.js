import Image from "next/image";
import Link from "next/link";
import AddFriendPage from "./add/page";
import DashboardPage from "./dashboard/page";
import RegisterPage from "./register/page";

export default function Home() {
  return (
    // <AddFriendPage />
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <RegisterPage />
    </div>
  );
}
