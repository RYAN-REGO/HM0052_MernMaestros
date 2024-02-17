import React from "react";
import MentorCard from "./MentorCard";

const MentorProfilePage = () => {
  return (
    <div className="p-9 h-[100vh] overflow-auto">
      <MentorCard />
      <div className="mt-9">
        <h1 className="text-xl font-semibold">About</h1>
        <p>
          Mentorship to me is not only about - 1. Helping people 2. Guiding them
          3. Sharing experiences I have mentored a lot of people informally from
          Linkedin and have realized that, most of the times – People are aware
          of all solutions and they just want to validate their thought process
          in structured{" "}
        </p>
      </div>
      <div className="flex gap-2 items-center mt-9">
        <h1 className="text-xl font-semibold">Skills:</h1>
        <div className="ml-4 flex gap-4">
          <div className="flex items-center px-4 h-9 rounded-full bg-blue-300">
            Python
          </div>
          <div className="flex items-center px-4 h-9 rounded-full bg-blue-300">
            Java
          </div>
          <div className="flex items-center px-4 h-9 rounded-full bg-blue-300">
            Flask
          </div>
        </div>
      </div>

      <MentorCard />
      <div className="mt-9">
        <h1 className="text-xl font-semibold">About</h1>
        <p>
          Mentorship to me is not only about - 1. Helping people 2. Guiding them
          3. Sharing experiences I have mentored a lot of people informally from
          Linkedin and have realized that, most of the times – People are aware
          of all solutions and they just want to validate their thought process
          in structured{" "}
        </p>
      </div>
      <div className="flex gap-2 items-center mt-9">
        <h1 className="text-xl font-semibold">Skills:</h1>
        <div className="ml-4 flex gap-4">
          <div className="flex items-center px-4 h-9 rounded-full bg-blue-300">
            Python
          </div>
          <div className="flex items-center px-4 h-9 rounded-full bg-blue-300">
            Java
          </div>
          <div className="flex items-center px-4 h-9 rounded-full bg-blue-300">
            Flask
          </div>
        </div>
      </div>

      <MentorCard />
      <div className="mt-9">
        <h1 className="text-xl font-semibold">About</h1>
        <p>
          Mentorship to me is not only about - 1. Helping people 2. Guiding them
          3. Sharing experiences I have mentored a lot of people informally from
          Linkedin and have realized that, most of the times – People are aware
          of all solutions and they just want to validate their thought process
          in structured{" "}
        </p>
      </div>
      <div className="flex gap-2 items-center mt-9">
        <h1 className="text-xl font-semibold">Skills:</h1>
        <div className="ml-4 flex gap-4">
          <div className="flex items-center px-4 h-9 rounded-full bg-blue-300">
            Python
          </div>
          <div className="flex items-center px-4 h-9 rounded-full bg-blue-300">
            Java
          </div>
          <div className="flex items-center px-4 h-9 rounded-full bg-blue-300">
            Flask
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfilePage;
