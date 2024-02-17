import React from "react";

const MentorDashboard = () => {
  return (
    <main className="w-full h-full flex flex-col gap-10">
      <div className="w-full min-h-[90px] bg-[rgba(34,139,230,.1)] rounded-md">
        <div className="w-full  flex items-center font-bold text-[30px] p-5 tracking-wide">
          Mentor Dashboard
        </div>
      </div>
        <div className="min-h-[100vh] w-full flex flex-col gap-10">
            <div className="h-[100px] w-full bg-slate-300"></div>
            <div className="h-[100px] w-full bg-slate-300"></div>
        </div>
    </main>
  );
};

export default MentorDashboard;
