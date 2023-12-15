// import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
// import Back from "../assets/ProductImgs/Back.jpg";
// import Full from "../assets/ProductImgs/Full.jpg";
import Main from "../assets/ProductImgs/Main.jpg";
// import Shoulder from "../assets/ProductImgs/Shoulder.jpg";
import Button from "./Button";

const ItemCard = () => {
  const CartBuy = [
    { key: 1, name: "Add To Cart" },
    { key: 2, name: " Buy Now" },
  ];
  const ItemImage = [
    {
      id: 1,
      img: Main,
      PicOf: "Main",
    },
    // {
    //   id: 2,
    //   img: Back,
    //   PicOf: 'Back',
    // },
    // {
    //   id: 3,
    //   img: Full,
    //   PicOf: 'Full',
    // },
    // {
    //   id: 4,
    //   img: Shoulder,
    //   PicOf: 'Shoulder',
    // },
  ];

  return (
    <>
      <div className="h-[30rem] rounded-xl w-[19rem] flex items-center justify-between flex-col border-2 border-sky-200 mx-3 my-1">
        <span className="flex w-full justify-center h-72 overflow-x-scroll ItemImgSpan relative overflow-hidden">
          {ItemImage.map((img) => (
            <img src={img.img} key={img.id} alt={img.PicOf} className="w-56" />
          ))}
        </span>
        <span className="flex w-full text-left flex-col ml-8">
          <h2 className="font-medium">Men Shirt</h2>
          <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[90%]">
          Pure Cotton Stuff
          Pure Cotton Stuff
          Pure Cotton Stuff
          </p>
          <span className="flex">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </span>
          <h4 className="text-xl">
            <span className="font-medium">&#8377;</span> 250{" "}
            <span className="text-base">
              M.R.P :<span className="line-through text-sm">&#8377;500</span>
            </span>
          </h4>
        </span>
        <span className="flex gap-3">
          {CartBuy.map((item) => (
            <Button value={item.name} key={item.key}/>
          ))}
        </span>
      </div>
    </>
  );
};

export default ItemCard;
