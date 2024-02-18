/* eslint-disable react/prop-types */
import ProfilePhoto from "../../assets/mentor.png";

const FeedCard = ({mentor}) => {
  return (
    <div className="p-5 border-2 border-gray-300 rounded-lg hover:border-blue-400">
      <div className=" flex justify-between border-b pb-5 border-gray-300">
        <div className="flex gap-6  ">
          <img src={mentor?.profilePicture || ProfilePhoto} className="h-24 rounded-lg" alt="profile" />
          <div>
            <h1 className="font-semibold text-xl">{mentor.firstName} {mentor.lastName}</h1>
            <h3 className="text-gray-500">{mentor.currentlyWorkingAt}</h3>
            <p className="text-sm mt-1 line-clamp-2 w-3/5">
              {mentor.bio}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border-b py-5 border-gray-300">
        <div className="flex  gap-4 items-center">
          <span className="font-semibold">Profieciency: </span>
          <div className="flex flex-wrap w-44 gap-2">
            {mentor?.proficiency?.map((prof) => (
              <div key={prof} className="px-2 py-1 border border-gray-300 rounded-full text-sm">
                {prof}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-4 flex flex-col md:flex-row md:justify-between items-center gap-4">
        <button className="py-2.5 w-full md:w-auto px-4 bg-gray-400 rounded-lg font-semibold text-white ">
          View Profile
        </button>

        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold">
            {mentor.rateOfMentorship}rs <span className="text-base font-normal">/hr</span>
          </h1>

          <button className="py-2.5 px-4 bg-green-400 rounded-lg font-semibold text-white ">
            Book a session
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
