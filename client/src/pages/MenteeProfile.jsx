import axios from "axios";
import MenteeCard from "../components/Mentee/MenteeCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const MenteeProfilePage = () => {

  const [mentee, setMentee] = useState({});//[1
  const user =useSelector((state) => state.user);
  const getMentor = async () => {
    try {
      axios.post("/data/mentee/get-mentee-profile-data",{
        email:user?.currentUser?.mentee?.email 
      }).then((res) => {
        console.log(res.data);
        setMentee(res.data);
      }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMentor();
  }, []);

  return (
    <div className="px-9 pt-4 h-[95vh] overflow-auto">
      <div className="w-full h-44 bg-blue-300 rounded-lg mb-9"></div>
      <div className="flex justify-between  rounded-lg p-4">
        <MenteeCard mentee={mentee} />
        <div className="flex items-center">
          <button className="px-4 h-9 border border-gray-300 rounded-lg">
            Edit profile
          </button>
        </div>
      </div>

      <div className="mt-16 rounded-lg">
        <h1 className="text-xl font-semibold">Description</h1>
        <p className="mt-2">
          {mentee.bio}
        </p>
      </div>
      <div className=" items-center mt-9 rounded-lg p-4">
        <h1 className="text-xl font-semibold">Need guidance in: </h1>
        <div className="mt-4 flex gap-4">
          {mentee?.needs?.map((need) => (
            <div key={need} className="flex items-center px-4 h-9 rounded-lg border border-gray-300">
              {need}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenteeProfilePage;
