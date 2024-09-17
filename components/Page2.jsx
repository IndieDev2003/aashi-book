// import {useState} from "react";
import flipNext from "react-pageflip";
import Image from "next/image";
import FrameImg from "@/public/pageFrame.png";

const Page2 = ({ Color, Header, Content, Footer }) => {

  if (Footer === '') {
    Footer = "Next Page";
  }
  return (
    <div className={`h-full ${Color} z-10 opacity-90  page2-shadow`}>
      <div className=" justify-between  opacity-80  -z-[1] absolute">
        <Image src={FrameImg} alt="background-frame" />
        {/* <Image src={UpperImg} alt="background-frame" /> */}
      </div>

      {/* Main Letter Start From Here*/}
      <div className="h-[100%] w-full flex flex-col p-3 z-40">
        <div className="h-20 min-w-min ">
          <h3 className="text-xl font-bold">{`${Header}`}</h3>
        </div>

        <div className="min-h-min p-1">
          <div className="font-semibold">{Content}</div>
        </div>

        <div className=" min-w-min mt-1">
          <h3
            className="font-bold"
            // onClick={() => current.pageFlip().flipNext()}
          >{`${Footer}`}</h3>
        </div>
      </div>
    </div>
  );
};

export default Page2;
