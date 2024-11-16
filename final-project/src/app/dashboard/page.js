import Link from "next/link";
const DashboardPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-5xl font-bold mb-5">Welcome to VibeCheck!</h1>
      <Link href="/add">
        <button className="px-4 py-2 bg-blue-400 text-white rounded">
          {" "}
          Add Friend
        </button>
      </Link>
      <h3>Your Friends</h3>
    </div>
  );
};

export default DashboardPage;
