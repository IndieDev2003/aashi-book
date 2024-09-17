import React from "react";
import Image from "next/image";
import FrameImg from "@/public/coverFrame.png";
import end from "@/public/images/end.jpg";

const EndPage = ({ Color, Title, Footer, Content, Img }) => {
  return (
    <div className={`h-full w-full ${Color} z-10 opacity-90 page-shadow`}>
      <div className=" justify-between  opacity-80  -z-[1] absolute">
        <Image src={FrameImg} alt="background-frame" priority={true} />
      </div>

      {/* Main Letter Start From Here*/}

      <div className="h-full flex flex-col items-center justify-center ">
        <div className="h-[150px] w-[150px] bg-red-700 rounded-full object-cover object-center">
          <Image src={end} alt="background-image" className="h-[150px] w-[150px] bg-red-700 rounded-full object-cover object-center "/>
        </div>
        <h2 className="text-xl w-[200px] font-semibold text-center mt-4 font-mono">
          {/* {`${Title}`} */}
        </h2>
        <p className="font-semibold px-14 text-center">{Content}</p>

        <h3 className="font-bold text-pink-900">{Footer}</h3>
      </div>
    </div>
  );
};

export default EndPage;
