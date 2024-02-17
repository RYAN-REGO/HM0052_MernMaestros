import React from "react";
import MenteeCard from "./MenteeCard";

const MenteeProfilePage = () => {
  return (
    <div className="px-9 pt-4 h-[100vh] overflow-auto">
      <div className="w-full h-44 bg-blue-300 rounded-lg mb-9 shadow-sm"></div>
      <div className="flex justify-between border border-gray-300 rounded-lg p-4 shadow-sm">
        <MenteeCard />
      </div>
      <div className="mt-9 border border-gray-300 rounded-lg p-4 shadow-sm">
        <h1 className="text-xl font-semibold">Description</h1>
        <p className="mt-2">
          Mentorship to me is not only about - 1. Helping people 2. Guiding them
          3. Sharing experiences I have mentored a lot of people informally from
          Linkedin and have realized that, most of the times – People are aware
          of all solutions and they just want to validate their thought process
          in structured{" "}
        </p>
      </div>
      <div className="flex gap-2 items-center mt-9 border border-gray-300 rounded-lg p-4 shadow-sm">
        <h1 className="text-xl font-semibold">Need guidance in: </h1>
        <div className="ml-4 flex gap-4">
          <div className="flex items-center px-4 h-9 rounded-lg border border-gray-300">
            Python
          </div>
          <div className="flex items-center px-4 h-9 rounded-lg border border-gray-300">
            Java
          </div>
          <div className="flex items-center px-4 h-9 rounded-lg border border-gray-300">
            Flask
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeProfilePage;
