import React from 'react'

const Card = () => {
  return (
    <main className='w-[70vh] h-[315px] bg-white border rounded-md '>
      <div className="flex flex-row gap-3">
        <div className="h-[120px] w-[170px] bg-black"></div>
        <div className="flex-col w-full h-[120px]">
            <div className="w-full h-[50%] flex-col pl-3 pt-1 border-b">
                <div className="font-bold text-[18px]">Ryan Rego</div>
                <div className="text-[15px]">Associate engineer at XYZ</div>
            </div>
            <div className="line-clamp-2 text-[14px] p-1 pl-3 border-b">
                With 3 years of data Analyst experience, I offer tailored guidance for your data goals.Dive into immersive sessions, real projects, and master tools.
            </div>
        </div>
      </div>
      <div className="w-full h-[70px] flex items-center justify-between px-5 border-b">
        <div className="flex flex-row gap-2 w-[200px] h-full items-center">
            <div className="text-[21px] font-bold">
                10000
            </div>
            <div className="text-[14px]">Per Hour</div>
        </div>
        <div className="">
            <button className='p-2 bg-slate-200 text-[14px] tracking-wider rounded-md'>View Profile</button>
        </div>
      </div>
      <div className="h-[20%] w-full flex-row line-clamp-2 border-b">
       
      </div>
      <div className="w-full h-[60px] flex items-center px-5 justify-between">
            <div className="">helo</div>
            <button className='bg-blue-400 p-2 rounded-md text-[15px] tracking-wide font-semibold hover:bg-blue-500'>Book a Session</button>
        </div>
    </main>
  )
}

export default Card;
