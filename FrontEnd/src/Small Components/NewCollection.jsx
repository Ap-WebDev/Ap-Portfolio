import React from "react";
import g6 from "../assets/Images/g6.png";
import Button from "./Button";

const NewCollection = () => {
  return (
    <>
      <div className="my-4 w-screen  bg-[#d9d9d9]">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-semibold py-4">New Collection</h2>
          <p className="mb-6 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sitcbsjkbcbjsblkx amet,
          </p>
        </div>
        <div className=" flex items-center justify-center gap-16 my-12">
          <div className="bg-red-400 flex flex-col justify-center items-center overflow-hidden rounded-3xl">
            <span className="w-full ml-[20%]">
              <img src={g6} alt="" className="w-[80%]" />
            </span>
            <span>
              <Button value={"Buy Now"} />
            </span>
          </div>
          <div className="bg-red-400 flex flex-col justify-center items-center overflow-hidden rounded-3xl">
            <span className="w-full ml-[20%]">
              <img src={g6} alt="" className="w-[80%]" />
            </span>
            <span>
              <Button value={"Buy Now"} />
            </span>
          </div>
          <div className="bg-red-400 flex flex-col justify-center items-center overflow-hidden rounded-3xl">
            <span className="w-full ml-[20%]">
              <img src={g6} alt="" className="w-[80%]" />
            </span>
            <span>
              <Button value={"Buy Now"} />
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[8rem] mb-32 gap-[7.5%]">
          <div className="w-[30%] h-[38rem] bg-red-700 relative rounded-tl-[8rem]">
            <span className="w-[150%] bottom-[-3.5rem] right-[-120%] h-28 bg-slate-600 absolute z-[35]"></span>
          </div>
          <div className="w-[40%]">
            <h2 className="text-5xl font-bold leading-[1.375]">
              Design Your Confidence
              <br />
              Follow New Trends
            </h2>
            <p className="w-[80%] my-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sollicitudin libero nec augue tristique, in ultricies libero
              varius. Duis a tellus dolor. Curabitur ac nisi malesuada, dapibus
              ante ut, egestas mi. Nam quis tristique arcu, quis Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin
              libero nec augue tristique, in ultricies libero varius. Duis a
              tellus dolor. Curabitur ac nisi malesuada, dapibus ante ut,
              egestas mi. Nam quis tristique arcu, quis efficitur massa. Aenean
              pulvinar mi eu luctus hendrerit. Pellentesque ex lorem, lacinia id
              mattis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCollection;
