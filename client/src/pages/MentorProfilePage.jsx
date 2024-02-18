
import { useEffect, useState } from "react";
import ProfilePhoto from "../assets/mentor.png";
import Carousal from "../components/testimonial/Carousal";
import axios from "axios";
import { useSelector } from "react-redux";

const MentorProfilePage = () => {

  const [mentor, setMentor] = useState({});
  const user = useSelector((state) => state.user);
  const getMentor = async () => {
    try {
      axios.post("/data/mentor/get-mentor-profile-data", {
        email: user?.currentUser?.mentor?.email,
      }).then((res) => {
        console.log(res.data);
        setMentor(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMentor();
  },[]);

  return (
    <div className="pb-28 md:px-16 pt-4 h-[95vh] overflow-auto text-gray-700">
      <div className="w-full h-44 bg-gray-300 rounded-lg mb-9 shadow-sm"></div>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="flex gap-6 items-center">
          <img
            src={mentor.profilePicture ||ProfilePhoto}
            className="h-32 w-32 rounded-full"
            alt="profile"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold">{mentor?.firstName} {mentor?.lastName}</h1>
            <h3 className="text-sm">{mentor.currentlyWorkingAt}</h3>
            <div className="flex gap-4">
              <span className="text-sm">⭐ 4.9</span>
              <span className="text-sm text-green-600">🟢 20+ mentees</span>
            </div>
          </div>
        </div>
        <div className="p-4 mt-9 md:mt-0 bg-white shadow-sm border border-green-400 rounded-lg">
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold">${mentor.rateOfMentorship}</span>
            <button className="px-4 h-9 bg-green-600 rounded-lg text-white font-semibold">
              Book a session
            </button>
          </div>
          <p className="mt-4">Average response time 1hr</p>
        </div>
      </div>

      <div className="mt-16 rounded-lg">
        <h1 className="text-2xl font-semibold underline decoration-blue-300">
          Description
        </h1>
        <p className="mt-2">
          {mentor?.bio}
        </p>
      </div>
      <div className="mt-9 rounded-lg ">
        <h1 className="text-2xl font-semibold underline decoration-blue-300">
          Proficiency:{" "}
        </h1>
        <div className="flex gap-4 flex-wrap mt-4">
          {mentor?.proficiency?.map((item) => (
            <div
              key={item}
              className="flex items-center px-4 h-9 rounded-full bg-gray-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-28">
        <h1 className="font-semibold text-3xl mb-9 underline decoration-blue-300">
          Happy Mentees
        </h1>
        <div>
          <Carousal />
        </div>
      </div>
    </div>
  );
};

export default MentorProfilePage;
