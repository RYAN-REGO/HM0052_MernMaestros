import React from 'react'
import {useParams} from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const MentorCall = () => {
  const {roomId} = useParams();

  const myMeeting = async(element) => {
    const appId = 1118000397;
    const serverSecret = "282ab140579e78a3eab87dd7e3603c2e";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(), "Ryan Rego");

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container : element,
      sharedLinks : [
        {
          name : 'Copy Link',
          url : `http://localhost:5173/room/${roomId}`
        }
      ],
      scenario : {
        mode : ZegoUIKitPrebuilt.OneONoneCall,
      }
    })
  }

  return (
    <main>
      <div className="w-full min-h-[80px] text-[29px] font-semibold bg-blue-300 rounded-md flex items-center p-2">Welcome to personalized mentor session</div>
      <div className="">
        <div ref={myMeeting}/>
      </div>
    </main>
  )
}

export default MentorCall;
