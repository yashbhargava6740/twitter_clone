import React, { useCallback } from "react";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitterX } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import FeedCard  from '../components/FeedCard'
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { graphQlClient } from "@/clients/api";
import { verifyGooglerUserTokenQuery } from "@/graphql/user/user";
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
  const handleLoginWithGoogle = useCallback(async (cred:CredentialResponse) => {
    const { credential } = cred;
    if(!credential) {
      return toast.error(`Google Auth Token not found`);
    }
    const { verifyGoogleToken } = await graphQlClient.request(verifyGooglerUserTokenQuery, {token: credential})
    toast.success(`Verified`);
    // console.log(verifyGoogleToken);
    if(!verifyGoogleToken) return toast.error("Internal Server Error, Try after some time");
    window.localStorage.setItem('__twitter_token', verifyGoogleToken);
  },[]);
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
        
        <div className="col-span-3">
          <div className="mx-4 p-5 bg-slate-700 rounded-lg">
            <h1 className="my-2 text-2xl">New to twitter?</h1>
          <GoogleLogin onSuccess={handleLoginWithGoogle}></GoogleLogin>
          </div>
          
        </div>
      
      </div>
    </div>
  );
}
