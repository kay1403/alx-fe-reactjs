import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="border p-4 rounded shadow-md flex items-center gap-4">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h2 className="font-bold text-lg">{user.login}</h2>
        {user.location && <p>Location: {user.location}</p>}
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View Profile
        </a>
      </div>
    </div>
  );
};

export default UserCard;
