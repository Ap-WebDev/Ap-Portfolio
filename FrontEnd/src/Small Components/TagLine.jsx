import React from "react";
import g1 from '../assets/Images/g1.png'
import Button from "./Button";

const TagLine = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-[2.5%]">
        <div className="w-[40%]">
          <h2 className="text-5xl font-bold leading-snug">Find The Best<br/> Fashion Style<br/> For You</h2>
          <p className="w-[80%] my-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin libero nec augue tristique, in ultricies libero varius. Duis a tellus dolor. Curabitur ac nisi malesuada, dapibus ante ut, egestas mi. Nam quis tristique arcu, quis</p>

        <Button value={'View More'}/>
        </div>
        <div className="h-[40rem] w-[35%] grid place-content-center rounded-bl-[12rem] overflow-hidden">
                <img src={g1} alt="" className="w-[90%]"/>
            {/* <span className="bg-slate-800 h-auto w-full"> */}
            {/* </span> */}
        </div>
      </div>
    </>
  );
};

export default TagLine;
