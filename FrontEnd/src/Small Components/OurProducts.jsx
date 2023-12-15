import b1 from "../assets/ProductImgs/Back.jpg";
import { FaStar, FaRegStar } from "react-icons/fa";
import React from "react";

const OurProducts = () => {
  const OurList = [
    { key: 1, name: "Hot" },
    { key: 2, name: "On Sale" },
    { key: 3, name: "New Trending" },
    { key: 4, name: "New Arival" },
  ];
  return (
    <div className="flex justify-center items-center w-full p-8 bg-[#d9d9d9] flex-col">
      <h2 className="font-semibold text-5xl">Our Products</h2>
      <span className="flex gap-8 my-6">
        {OurList.map((items) => (
          <a href="" key={items.key}>
            <h3 className="text-xl">{items.name}</h3>
          </a>
        ))}
      </span>
      <span className="flex flex-wrap gap-14 w-[90%] items-center justify-center my-8">
        <span className="rounded-3xl bg-slate-700 overflow-hidden">
          <img src={b1} className="w-[200px] h-[225px]" />
          <span className="px-4 w-full  text-slate-300">
            <p className="flex px-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
            <h3 className="my-1 px-3">Name of Product</h3>
            <h3 className="px-3">Sold [115]</h3>
          </span>
        </span>
        <span className="rounded-3xl bg-slate-700 overflow-hidden">
          <img src={b1} className="w-[200px] h-[225px]" />
          <span className="px-4 w-full  text-slate-300">
            <p className="flex px-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
            <h3 className="my-1 px-3">Name of Product</h3>
            <h3 className="px-3">Sold [115]</h3>
          </span>
        </span>
        <span className="rounded-3xl bg-slate-700 overflow-hidden">
          <img src={b1} className="w-[200px] h-[225px]" />
          <span className="px-4 w-full  text-slate-300">
            <p className="flex px-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
            <h3 className="my-1 px-3">Name of Product</h3>
            <h3 className="px-3">Sold [115]</h3>
          </span>
        </span>
        <span className="rounded-3xl bg-slate-700 overflow-hidden">
          <img src={b1} className="w-[200px] h-[225px]" />
          <span className="px-4 w-full  text-slate-300">
            <p className="flex px-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
            <h3 className="my-1 px-3">Name of Product</h3>
            <h3 className="px-3">Sold [115]</h3>
          </span>
        </span>
        <span className="rounded-3xl bg-slate-700 overflow-hidden">
          <img src={b1} className="w-[200px] h-[225px]" />
          <span className="px-4 w-full  text-slate-300">
            <p className="flex px-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
            <h3 className="my-1 px-3">Name of Product</h3>
            <h3 className="px-3">Sold [115]</h3>
          </span>
        </span>
        <span className="rounded-3xl bg-slate-700 overflow-hidden">
          <img src={b1} className="w-[200px] h-[225px]" />
          <span className="px-4 w-full  text-slate-300">
            <p className="flex px-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
            <h3 className="my-1 px-3">Name of Product</h3>
            <h3 className="px-3">Sold [115]</h3>
          </span>
        </span>
        <span className="rounded-3xl bg-slate-700 overflow-hidden">
          <img src={b1} className="w-[200px] h-[225px]" />
          <span className="px-4 w-full  text-slate-300">
            <p className="flex px-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
            <h3 className="my-1 px-3">Name of Product</h3>
            <h3 className="px-3">Sold [115]</h3>
          </span>
        </span>
        <span className="rounded-3xl bg-slate-700 overflow-hidden">
          <img src={b1} className="w-[200px] h-[225px]" />
          <span className="px-4 w-full  text-slate-300">
            <p className="flex px-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
            <h3 className="my-1 px-3">Name of Product</h3>
            <h3 className="px-3">Sold [115]</h3>
          </span>
        </span>
        <span className="rounded-3xl bg-slate-700 overflow-hidden">
          <img src={b1} className="w-[200px] h-[225px]" />
          <span className="px-4 w-full  text-slate-300">
            <p className="flex px-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
            <h3 className="my-1 px-3">Name of Product</h3>
            <h3 className="px-3">Sold [115]</h3>
          </span>
        </span>
        <span className="rounded-3xl bg-slate-700 overflow-hidden">
          <img src={b1} className="w-[200px] h-[225px]" />
          <span className="px-4 w-full  text-slate-300">
            <p className="flex px-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
            <h3 className="my-1 px-3">Name of Product</h3>
            <h3 className="px-3">Sold [115]</h3>
          </span>
        </span>
      </span>
    </div>
  );
};

export default OurProducts;
