import React, { useState, useEffect } from "react";
import i1 from "../assets/Header Images/i1.png";
import i2 from "../assets/Header Images/i2.png";
import i3 from "../assets/Header Images/i3.png";
import i4 from "../assets/Header Images/i4.png";

const HeaderItems = () => {
  const HImg = [
    { key: 4, Img: i4 },
    { key: 1, Img: i1 },
    { key: 2, Img: i2 },
    { key: 3, Img: i3 },
  ];

  const [currentImage, setCurrentImage] = useState(HImg[0].Img);

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setCurrentImage(HImg[i].Img);
      i = (i + 1) % HImg.length;
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex overflow-scroll h-64 scroll-smooth HeaderItems">
      <img src={currentImage} className="h-64" />
    </div>
  );
};

export default HeaderItems;
