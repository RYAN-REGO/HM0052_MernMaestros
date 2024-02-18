import MentorAllowCard from "../../components/MentorAllowCard/MentorAllowCard";
const MentorDashboard = () => {
  return (
    <main className="w-full flex flex-col gap-10 h-[95vh] overflow-auto text-gray-700 md:px-16">
      <div className="w-full min-h-[90px] bg-blue-400 text-white rounded-md">
        <div className="w-full  flex items-center font-bold text-[30px] p-5  tracking-wide">
          Mentor Dashboard
        </div>
      </div>
      <div className="min-h-[100vh] w-full flex flex-col gap-7">
        <MentorAllowCard />
        <MentorAllowCard />
        <MentorAllowCard />
      </div>
    </main>
  );
};

export default MentorDashboard;
