import React from "react";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitterX } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import FeedCard  from '../components/FeedCard'

interface TwitterSideBarButton {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney/>
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        
        <div className="col-span-3 justify-start py-8 ml-28">
          <div className="w-fit text-2xl h-fit hover:bg-slate-800 rounded-full p-2 cursor-pointer transition-all">
            <BsTwitterX />
          </div>
          <div className="mt-4 text-2xl font-semibold pr-20">
            <ul>
              {sideBarMenuItems.map((item) => (
                <li
                  className="w-fit py-4 flex justify-start items-center gap-4 cursor-pointer hover:bg-gray-800 rounded-full  px-5"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <button className = " cursor-pointer bg-[#1d9bf0] p-4 rounded-full w-full m5-4 mx-10">Tweet</button>
          </div>
        </div>

        <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-600">
          <FeedCard/>                 
        </div>
        
        <div className="col-span-3"></div>
      
      </div>
    </div>
  );
}
