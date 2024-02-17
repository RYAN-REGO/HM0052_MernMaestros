const EditProfileForm = () => {
  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const formData = new FormData(event.target);
  //     const guidanceTopics = formData.get("guidanceTopics").split(",").map(topic => topic.trim()); // Split input value by commas
  //     // Send formData including guidanceTopics array to the backend
  //   };
  return (
    <div className="pb-28 md:px-11 py-5 text-gray-700 h-[100vh] overflow-auto">
      <div className="h-24 flex items-center bg-blue-200 rounded-lg">
        <h1 className="ml-4 text-4xl font-bold">Edit Profile</h1>
      </div>
      <form
        className="mt-9 flex flex-col gap-6"
        onSubmit={(e) => e.preventDefault()}
      >
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
            className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
            type="text"
            placeholder="Last name"
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
          Need for guidance in:
          <input
            className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
            type="text"
            placeholder="Skills or topics (separated by commas)"
            name="guidanceTopics" // Add a name attribute to identify this input field in the form
            required
          />
        </label>
        <div className="flex justify-end w-full">
          <button className="px-4 h-11 transition duration-300 bg-green-500 rounded-lg font-semibold text-white">
            Save Profile Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
