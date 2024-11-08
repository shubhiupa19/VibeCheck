import FriendForm from "../components/FriendForm";

const AddFriendPage = () => {
    return (
        <div className="flex flex-col items-center justify-start p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Friend</h1>
            <FriendForm />
        </div>
    );
}

export default AddFriendPage;