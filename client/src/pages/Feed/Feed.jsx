import { Select } from "@mantine/core";
import FeedCard from "../../components/Card/FeedCard";
// import MentorCard from "../../components/Mentor/MentorCard";
import { useEffect, useState } from "react";
import axios from "axios";

const FeedPage = () => {

  const [mentors, setMentors] = useState([]);
  const getAllMentors = async () => {
    try {
      axios.get("/getallmentors/getAll").then((res) => {
        console.log(res.data);
        setMentors(res.data); 
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getAllMentors()
  },[])

  return (
    <main className="md:px-16 w-full overflow-auto h-[95vh] text-gray-700">
      <div className="flex flex-col md:flex-row  justify-between md:items-center min-h-44 bg-blue-400 rounded-lg p-5">
        <div className="">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Recommended Mentors
          </h1>
          <h3 className="mt-4 text-xl font-semibold text-white">
            Showing 100+ mentors
          </h3>
        </div>
        <div className="mt-6 md:mt-0">
          <span className="text-white font-semibold">Sort by:</span>
          <Select
            className="w-80"
            placeholder="Recommended"
            data={["Price Low to High", "Price High to Low"]}
          />
        </div>
      </div>
      <div className="mt-11 flex flex-col gap-4">
        {
          mentors.length > 0 ? mentors?.map((mentor) => (
            <FeedCard key={mentor._id} mentor={mentor} />
          )) : <h1>Loading...</h1>
        }
      </div>
    </main>
  );
};

export default FeedPage;
