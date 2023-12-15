import React from "react";
import Button from "./Button";

const BestSeller = () => {
  return (
    <div className="h-[30rem] flex items-center justify-between w-screen ">
      <div className="w-[25%] ml-[2.5%]">
        <h2 className="text-5xl font-bold leading-[1.375]">
          Best Selling
          <br />
          Products
        </h2>
        <p className="w-[90%] my-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sitcbsjkbcbjsblkx amet, Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Praesent sollicitudin libero nec augue tristique, in
          ultricies libero varius. Duis a tellus dolor. Curabitur .
        </p>
        <Button value={"See More"} />
      </div>
      <div className=" p-6 flex w-[75%] overflow-x-scroll BestSellScroll">
        <span className="grid place-content-center bg-black w-[18rem] mx-4 hover:scale-110 duration-1000  rounded-3xl">
          <span className="h-[18rem] w-[18rem] bg-red-600 rounded-t-3xl"></span>
          <span className="h-[6rem] bg-red-900 w-full pl-8 text-white rounded-b-3xl">
            <h3>Name</h3>
            <h3>Rating</h3>
            <h3>Sold units</h3>
          </span>
        </span>
                
      </div>
    </div>
  );
};

export default BestSeller;
