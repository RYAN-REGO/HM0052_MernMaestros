const EditMentorProfile = () => {
  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const formData = new FormData(event.target);
  //     const guidanceTopics = formData.get("guidanceTopics").split(",").map(topic => topic.trim()); // Split input value by commas
  //     // Send formData including guidanceTopics array to the backend
  //   };
  return (
    <div className="flex justify-center ">
      <div className="pb-28 md:w-[540px]  rounded-lg md:p-5 text-gray-700 h-[95vh] overflow-auto">
        <h1 className="text-3xl text-center font-bold ">Edit Profile</h1>

        <form
          className="bg-white mt-5 flex flex-col gap-6 rounded-lg border border-gray-300 shadow-md p-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex gap-4 justify-between w-full">
            <label className="text-black-500 text-sm font-semibold">
              First name
              <input
                className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
                type="text"
                placeholder="First name"
                required
              />
            </label>
            <label className="text-black-500 text-sm font-semibold">
              Last name
              <input
                className="mt-1 block w-full  rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
                type="text"
                placeholder="Last name"
                required
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
            />
          </label>

          <button className="px-4 h-9 transition duration-300 bg-green-500 rounded-lg font-semibold text-white">
            Save Profile Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditMentorProfile;
