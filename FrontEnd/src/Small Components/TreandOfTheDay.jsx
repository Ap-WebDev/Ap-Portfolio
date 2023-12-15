import React from "react";
import Button from "./Button";

const TreandOfTheDay = () => {
  return (
    <div className="flex py-8 justify-center items-center w-screen">
      <span className="w-[40%]">
        <h2 className="font-extrabold text-5xl">Treand Of The Day</h2>
        <p className="w-[80%] py-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sitcbsjkbcbjsblkx amet, Lorem{" "}
        </p>
        <span className="flex gap-10 my-6">
          <span className="bg-[#d9d9d9] p-4 rounded-2xl">
            <h2 className="font-bold text-5xl">02</h2>
            <p className=" font-bold">Days</p>
          </span>
          
          <span className="bg-[#d9d9d9] p-4 rounded-2xl">
            <h2 className="font-bold text-5xl">02</h2>
            <p className=" font-bold">Days</p>
          </span>
          
          <span className="bg-[#d9d9d9] p-4 rounded-2xl">
            <h2 className="font-bold text-5xl">02</h2>
            <p className=" font-bold">Days</p>
          </span>
          
          
        </span>
        <Button value={'Buy Now'}/>
      </span>
      <span className="h-96 w-96 rounded-2xl bg-slate-600"></span>
    </div>
  );
};

export default TreandOfTheDay;
