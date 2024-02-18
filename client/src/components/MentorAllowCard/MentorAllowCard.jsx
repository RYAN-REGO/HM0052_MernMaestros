import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

const MentorAllowCard = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const userId = user.currentUser.mentor._id;
  console.log(userId);

  const handleClick = () => {
    //we have to navigate to specific route
    if(userId)
    {
      navigate(`/room/${userId}`);
    }
  }
  return (
    <div className="flex flex-col gap-6 md:flex-row justify-between w-full border-2 border-gray-300 hover:border-blue-300 shadow-sm rounded-lg p-5">
      <div>
        <div className="flex gap-2">
          <h1 className="font-semibold text-blue-400">Request from:</h1>
          <h1 className="font-semibold">John Dae</h1>
        </div>

        <div className="mt-4">
          <h1 className="font-semibold text-blue-400">Need mentorship in:</h1>
          <div className="mt-2 flex gap-4">
            <div className="rounded-full border px-2 py-1 text-sm font-semibold border-gray-300">
              Placement
            </div>
            <div className="rounded-full border  px-2 py-1 text-sm font-semibold border-gray-300">
              Webd
            </div>
            <div className="rounded-full border  px-2 py-1 text-sm font-semibold border-gray-300">
              Dsa
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 items-center">
        <button className="px-4 h-9 bg-green-500 text-white font-semibold rounded-lg" onClick={handleClick}>
          Accept
        </button>
        <button className="px-4 h-9 bg-red-500 text-white font-semibold rounded-lg">
          Decline
        </button>
      </div>
    </div>
  );
};

export default MentorAllowCard;
