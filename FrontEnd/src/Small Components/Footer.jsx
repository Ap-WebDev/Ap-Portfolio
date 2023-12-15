import React from "react";
import { AiFillInstagram, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaFacebookF } from "react-icons/fa6";
import { RiDiscordLine, RiDiscordFill } from "react-icons/ri";
import { TbBrandYoutube, TbBrandYoutubeFilled } from "react-icons/tb";

const Footer = () => {
  const Menu = [
    { key: "1", name: "Home", id: "/" },
    { key: "2", name: "Men", id: "Men" },
    { key: "3", name: "Women", id: "Women" },
    { key: "4", name: "Collection", id: "project" },
    { key: "5", name: "Trending", id: "contact-me" },
  ];
  const FootLinks = [
    { key: "1", name: "About Us", Link: "contact-me" },
    { key: "2", name: "Contact Us", Link: "project" },
    { key: "3", name: "Privicy and Policy", Link: "Men" },
    { key: "4", name: "Security", Link: "Women" },
    { key: "5", name: "Help!", Link: "/" },
  ];
  const SocialLinks = [
    {
      key: "1",
      name: "InstaGram",
      Link: "/",
      FillLogo: AiFillInstagram,
      LineLogo: AiOutlineInstagram,
    },
    {
      key: "2",
      name: "FaceBook",
      Link: "Men",
      FillLogo: FaFacebook,
      LineLogo: FaFacebookF,
    },
    {
      key: "3",
      name: "Twitter",
      Link: "Women",
      FillLogo: AiFillInstagram,
      LineLogo: AiOutlineInstagram,
    },
    {
      key: "4",
      name: "Youtube",
      Link: "project",
      FillLogo: TbBrandYoutubeFilled,
      LineLogo: TbBrandYoutube,
    },
    {
      key: "5",
      name: "Discord",
      Link: "contact-me",
      FillLogo: RiDiscordFill,
      LineLogo: RiDiscordLine,
    },
  ];

  return (
    <div className="bg-black h-[35rem] w-screen text-white flex flex-col items-center justify-center">
      <h2 className="text-4xl">
        Follow Us On Instagram <a href="">@ChiaAura</a>
      </h2>
      <span className="flex">
        <span className="h-[20rem] w-screen flex gap-[5rem] items-center justify-center">
          <span className="">
            {FootLinks.map((item) => (
              <a href="" key={item.key} className="">
                <h4 className="text-xl py-1">{item.name}</h4>
              </a>
            ))}
          </span>
          <span>
            {Menu.map((item) => (
              <a href="" key={item.key} className="">
                <h4 className="text-xl py-1 ">{item.name}</h4>
              </a>
            ))}
          </span>

          <span className="flex flex-col ">
            {SocialLinks.map((item) => (
              <a href="" key={item.key} className="">
                <h4
                  className="text-xl py-1 flex gap-4 items-center "
                  id="LinkSocialMedia"
                >
                  <span>
                    <item.LineLogo className="LineLogo" />
                    <item.FillLogo className="FillLogo" />
                  </span>
                  {item.name}
                </h4>
              </a>
            ))}
          </span>
          <div className="w-1/4"></div>
        </span>
      </span>
      <h3 className="text-2xl mb-10"> CopyRight@ChiaAura2023</h3>
    </div>
  );
};

export default Footer;
