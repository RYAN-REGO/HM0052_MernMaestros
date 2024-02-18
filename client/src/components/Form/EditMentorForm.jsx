/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditMentorProfile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [currentlyWorkingAt, setCurrentlyWorkingAt] = useState("");
    const [bio, setBio] = useState("");
    const [proficiency, setProficiency] = useState("");
    const [rateOfMentorship, setRateOfMentorship] = useState("");


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);
    //     const guidanceTopics = formData.get("guidanceTopics").split(",").map(topic => topic.trim()); // Split input value by commas
    //     // Send formData including guidanceTopics array to the backend
    //   };
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        // if(!firstName || !lastName || !currentlyWorkingAt || !bio || !proficiency || !rateOfMentorship){
        //     alert("All fields are required")
        //     return;
        // }

        const proficientTopics = proficiency.split(",").map(topic => topic.trim());

        axios.post('/profile/mentor/edit', {
            token: localStorage.getItem('token'),
            firstName,
            lastName,
            currentlyWorkingAt,
            bio,
            proficiency: proficientTopics,
            rateOfMentorship
        }).then(res => {
            toast.success("Edit profile successfully", {
                className: 'bg-second text-black'
            })
            navigate(`/mentor/${res?.data?._id}`)
        }).catch(err => {
            toast.error("Something went wrong", {
                className: 'bg-second text-black'
            })
        })
    }

    return (
      <div className="flex justify-center ">
        <div className="pb-28 md:w-[540px]  rounded-lg md:p-5 text-gray-700 h-[95vh] overflow-auto">
          <h1 className="text-3xl text-center font-bold ">Edit Profile</h1>
  
          <form
            className="bg-white mt-5 flex flex-col gap-6 rounded-lg border border-gray-300 shadow-md p-5"
          >
            <div className="flex gap-4 justify-between w-full">
              <label className="w-full text-black-500 text-sm font-semibold">
                First name
                <input
                  className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
                  type="text"
                  placeholder="First name"
                  required
                  value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                />
              </label>
              <label className="w-full text-black-500 text-sm font-semibold">
                Last name
                <input
                  className="mt-1 block w-full  rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
                  type="text"
                  placeholder="Last name"
                  required
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                />
              </label>
            </div>
  
            <label className="text-black-500 text-sm font-semibold">
              Currently working at
              <input
                className="mt-1 block w-full  rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
                type="text"
                placeholder="Associate engineer @XYZ"
                required
                value={currentlyWorkingAt}
                onChange={(e)=>setCurrentlyWorkingAt(e.target.value)}
              />
            </label>
  
            <label className="text-black-500 text-sm font-semibold">
              Bio
              <textarea
                className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
                type="text"
                placeholder="Last name"
                rows={3}
                required
                value={bio}
                onChange={(e)=>setBio(e.target.value)}
              />
            </label>
  
            <label className="text-black-500 text-sm font-semibold">
              Proficiency:
              <input
                className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
                type="text"
                placeholder="Skills or topics (separated by commas)"
                name="guidanceTopics" // Add a name attribute to identify this input field in the form
                required
                value={proficiency}
                onChange={(e)=>setProficiency(e.target.value)}
              />
            </label>
  
            <label className="text-black-500 text-sm font-semibold">
              Rate of mentorship per hour ( in rupees ):
              <input
                className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
                type="number"
                placeholder="100"
                name="guidanceTopics" // Add a name attribute to identify this input field in the form
                required
                value={rateOfMentorship}
                onChange={(e)=>setRateOfMentorship(e.target.value)}
              />
            </label>
  
            <button onClick={handleSubmit} className="px-4 h-9 transition duration-300 bg-green-500 rounded-lg font-semibold text-white">
              Save Profile Changes
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default EditMentorProfile;