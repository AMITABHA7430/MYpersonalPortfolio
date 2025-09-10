import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userId } = useParams();

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold text-gray-800">User Profile</h1>
      <p className="mt-4 text-lg text-gray-600">
        Showing details for user: <span className="text-orange-700">{userId}</span>
      </p>
    </div>
  );
}

export default User;
