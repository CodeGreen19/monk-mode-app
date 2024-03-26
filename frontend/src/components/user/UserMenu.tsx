// LogoutChangePassword.tsx

import React from "react";

const LogoutChangePassword: React.FC = () => {
  const handleLogout = () => {
    // Logic for logging out the user
    console.log("User logged out");
  };

  const handleChangePassword = () => {
    // Logic for changing password
    console.log("Changing password");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="space-y-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleChangePassword}
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default LogoutChangePassword;
