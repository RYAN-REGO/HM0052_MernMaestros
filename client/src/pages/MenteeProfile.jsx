import ProfilePhoto from "../assets/mentor.png";

const MenteeProfilePage = () => {
  const proficiencyItems = [
    { name: "Python" },
    { name: "Java" },
    { name: "Flask" },
  ];

  return (
    <div className="pb-28 md:px-16 pt-4 h-[95vh] overflow-auto text-gray-700">
      <div className="w-full h-44 bg-gray-300 rounded-lg mb-9 shadow-sm"></div>

      <div className="flex gap-6 items-center">
        <img
          src={ProfilePhoto}
          className="h-32 w-32 rounded-full"
          alt="profile"
        />
        <div>
          <h1 className="text-xl font-semibold">Rohan Ramidwar</h1>
          <h3 className="text-sm">Student</h3>
        </div>
      </div>

      <div className="mt-16 rounded-lg">
        <h1 className="text-xl font-semibold">Description</h1>
        <p className="mt-2 ">
          Mentorship to me is not only about - 1. Helping people 2. Guiding them
          3. Sharing experiences I have mentored a lot of people informally from
          Linkedin and have realized that, most of the times – People are aware
          of all solutions and they just want to validate their thought process
          in structured{" "}
        </p>
      </div>
      <div className="mt-9 rounded-lg ">
        <h1 className="text-xl font-semibold">Need Mentorship in</h1>
        <div className="flex gap-4 flex-wrap mt-4">
          {proficiencyItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center px-4 h-9 rounded-full bg-gray-300"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenteeProfilePage;
