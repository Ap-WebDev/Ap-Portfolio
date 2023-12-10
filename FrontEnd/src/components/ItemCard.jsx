import {} from "react";
import Back from "../assets/ProductImgs/Back.jpg";
import Full from "../assets/ProductImgs/Full.jpg";
import Main from "../assets/ProductImgs/Main.jpg";
import Shoulder from "../assets/ProductImgs/Shoulder.jpg";

const ItemCard = () => {

  const ItemImage = [
    {
    id:1,
    img:"Main"
  },
    {
    id:2,
    img:"Back"
  },
    {
    id:3,
    img:"Full"
  },
  {
    id:4,
    img:"Shoulder"
  },
];

  return (
    <>
      <div className="h-96 rounded-xl w-[16rem]">
        <span className="flex">
          {ItemImage.map((img) => (
            <span key={img.id}>
              <img src={img.img} alt='' />
            </span>
          ))}
        </span>
      </div>
    </>
  );
};

export default ItemCard;
