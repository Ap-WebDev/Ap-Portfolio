import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const FaIcons = [
    { key: 1, name: FaCartShopping },
    { key: 2, name: FaUser },
  ];

  // Social Links and name Array of Objects
  const Social = [
    { key: "1", Name: "Facebook", Link: "" },
    { key: "2", Name: "Instagram", Link: "" },
    { key: "3", Name: "Twitter", Link: "" },
    // { key: "4", Name: "Github", Link: "" },
  ];

  // Menu Links and name Array of Objects
  const Menu = [
    { key: "1", name: "Home", id: "/" },
    { key: "2", name: "Men", id: "/Men" },
    { key: "3", name: "Women", id: "/Women" },
    { key: "4", name: "Collection Us", id: "/Collection" },
    { key: "5", name: "Trending", id: "/Trending" },
  ];

  // Nav Bar Hide and Visible code using JavaScript

  const CrossClick = () => {
    const DocsNav = document.getElementById("nav-span");
    const BurgerHasClick = document.getElementsByClassName("BurgerHasClick");
    const CrossHasClick = document.getElementsByClassName("CrossHasClick");

    for (let i = 0; i < BurgerHasClick.length; i++) {
      CrossHasClick[i].style.display = "none";
      BurgerHasClick[i].style.display = "block";
    }
    DocsNav.style.transitionDuration = "1s";
    DocsNav.style.transform = "translateX(200%)";
  };

  const BurgerClick = () => {
    const DocsNav = document.getElementById("nav-span");
    const BurgerHasClick = document.getElementsByClassName("BurgerHasClick");
    const CrossHasClick = document.getElementsByClassName("CrossHasClick");

    for (let i = 0; i < BurgerHasClick.length; i++) {
      CrossHasClick[i].style.display = "block";
      BurgerHasClick[i].style.display = "none";
    }

    DocsNav.style.transform = "translateX(100%)";
  };

  return (
    <>
      <div className="flex h-16  z-40 w-screen relative">
        <div className="flex h-16 items-center justify-between relative w-[100%]">
          <span>
            <a href="">
              <h1 className="text-4xl mx-8">ChiaAura</h1>
            </a>
          </span>
          <span className="flex gap-3">
            <input
              className="block w-[22rem] px-4 py-1 text-black bg-white border text-left border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              placeholder="Search your Imagination"
              type="text"
            />
            <button className="bg-purple-500 text-white font-medium px-7 py-1 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">
              Search
            </button>
          </span>
          <span className="flex gap-5 items-center justify-center ">
            {FaIcons.map((item) => (
              <a href=""  key={item.key}>
                <button className=" ">
                  <item.name className=" text-xl " />
                </button>
              </a>
            ))}
            <button className="relative h-12 w-12 grid place-items-center mr-4 z-50">
              <RxCross2
                className=" absolute hidden text-3xl CrossHasClick"
                onClick={CrossClick}
              />
              <CgMenuLeft
                className=" absolute text-3xl BurgerHasClick"
                onClick={BurgerClick}
              />
            </button>
          </span>
        </div>
        <section
          id="nav-span"
          className="flex items-center duration-1000 gap-16 w-[50%] h-screen justify-center bg-slate-100
           absolute"
        >
          <span className="h-3/6">
            <h3 className="text-2xl">Social Media</h3>
            {Social.map((social) => (
              <a 
                className="overflow-hidden "
                href={social.Link}
                key={social.key}
              >
                <h3 className=" text-xl my-4">{social.Name}</h3>
              </a>
            ))}
          </span>
          <span className="h-3/6">
            <h3 className="text-2xl">Menu</h3>
            {Menu.map((menu) => (
              <Link className="overflow-hidden " href={menu.id} key={menu.key}>
                <h3 className="MouseOver font-semibold text-5xl my-4 afterelement px-4 py-2">
                  {menu.name}
                </h3>
              </Link>
            ))}
          </span>
        </section>
      </div>
    </>
  );
};

export default NavBar;
