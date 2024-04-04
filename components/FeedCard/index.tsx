import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-gray-900 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
            alt="user image"
            height={50}
            width={50}
          ></Image>
        </div>
        <div className="col-span-11">
          <h5>Yash bhargava</h5>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eos, nihil ea vel reiciendis ipsum iste consequuntur
            cumque illo deleniti ut sunt nemo omnis similique obcaecati
            dignissimos doloribus pariatur fuga.
          </p>

          <div className="flex justify-between mt-5 text-2xl items-center p-2 w-[90%]">
            <div><BiMessageRounded/></div>
            <div><FaRetweet/></div>
            <div><AiOutlineHeart/></div>
            <div><BiUpload/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
