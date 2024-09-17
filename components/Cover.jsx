import React from "react";
import Image from "next/image";
import FrameImg from "@/public/coverFrame.png";
import cover from "@/public/images/cover3.jpg"

const Cover = ({ Color, Title, Content,Footer, Img }) => {
  return (
    <div className={`h-full w-full ${Color} z-10 opacity-90`}>
      <div className=" justify-between  opacity-80  -z-[1] absolute">
        <Image src={FrameImg} alt="background-frame" priority={true} />
      </div>

      {/* Main Letter Start From Here*/}

      <div className="h-full flex flex-col items-center justify-center ">
        <div className="h-[150px] w-[150px] bg-gray-50 rounded-full">
          <Image src={cover} alt="book-cover" width={250} height={350}  className="h-[150px] w-[150px] bg-red-700 rounded-full object-cover object-center "/>
        </div>
        <h2 className="text-xl w-[200px] font-semibold text-center mt-4 font-mono">
          {`${Title}`}
        </h2>
        <p className="font-semibold px-14 text-center leading-none">{Content}</p>

        <h3 className="mt-4">{Footer}</h3>
      </div>
    </div>
  );
};

export default Cover;
