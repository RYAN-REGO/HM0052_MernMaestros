import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfileForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [guidanceTopics, setGuidanceTopics] = useState("");

  const navigate = useNavigate();
  // const user = useSelector((state) => state.user);

  const navigateIt = () => {
    const role = localStorage.getItem("role");
    console.log(role);
    console.log(role==="mentee");
    if (role != "mentee") {
      navigate("/edit-mentor");
    }
  };
  useEffect(() => {
    navigateIt();
  }, []);
  const saveChanges = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const needs = guidanceTopics.split(",").map((topic) => topic.trim()); // Split input value by commas
    // Send formData including guidanceTopics array to the backend
    axios
      .post("profile/mentee/edit", {
        token,
        firstName,
        lastName,
        bio,
        needs,
      })
      .then((res) => {
        console.log(res);
        navigate(`/mentee/${res?.data?._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="pb-28 md:px-11 py-5 text-gray-700 h-[95vh] overflow-auto">
      <div className="h-24 flex items-center bg-blue-200 rounded-lg">
        <h1 className="ml-4 text-4xl font-bold">Edit Profile</h1>
      </div>
      <form className="mt-9 flex flex-col gap-6">
        <label className="text-black-500 text-sm font-semibold">
          First name
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
            type="text"
            placeholder="First name"
            required
          />
        </label>
        <label className="text-black-500 text-sm font-semibold">
          Last name
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
            type="text"
            placeholder="Last name"
            required
          />
        </label>
        <label className="text-black-500 text-sm font-semibold">
          Bio
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
            type="text"
            placeholder="Last name"
            rows={3}
            required
          />
        </label>

        <label className="text-black-500 text-sm font-semibold">
          Need for guidance in:
          <input
            value={guidanceTopics}
            onChange={(e) => setGuidanceTopics(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
            type="text"
            placeholder="Skills or topics (separated by commas)"
            name="guidanceTopics" // Add a name attribute to identify this input field in the form
            required
          />
        </label>
        <div className="flex justify-end w-full">
          <button
            onClick={saveChanges}
            className="px-4 h-11 transition duration-300 bg-green-500 rounded-lg font-semibold text-white"
          >
            Save Profile Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
