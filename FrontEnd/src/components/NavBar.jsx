
import { CgMenuLeft } from "react-icons/cg";
import { RxCross1,RxCross2  } from "react-icons/rx";
import logo from "../assets/logo.jpg";

const NavBar = () => {
  

  const CrossClick = () => {
    const DocsNav = document.getElementById("nav-span");
    const BurgerHasClick = document.getElementsByClassName("BurgerHasClick");
    const CrossHasClick = document.getElementsByClassName("CrossHasClick");

    for (let i = 0; i < BurgerHasClick.length; i++) {
      CrossHasClick[i].style.display = "none";
      BurgerHasClick[i].style.display = "block";
    }
    DocsNav.style.transitionDuration = "1.5s";
    DocsNav.style.transform = "translateX(150%)";
  };

  const BurgerClick = () => {
    const DocsNav = document.getElementById("nav-span");
    const BurgerHasClick = document.getElementsByClassName("BurgerHasClick");
    const CrossHasClick = document.getElementsByClassName("CrossHasClick");

    for (let i = 0; i < BurgerHasClick.length; i++) {
      CrossHasClick[i].style.display = "block";
      BurgerHasClick[i].style.display = "none";
    }

    DocsNav.style.transform = "translateX(50%)";
  };

  const Social = [
    { key: "1", Name: "Facebook", Link: "" },
    { key: "2", Name: "Instagram", Link: "" },
    { key: "3", Name: "Linkedin", Link: "" },
    { key: "", Name: "Github", Link: "" },
  ];

  const Menu = [
    { key: "1", name: "Home", id: "/" },
    { key: "2", name: "About Me", id: "about-us" },
    { key: "3", name: "Projects", id: "project" },
    { key: "4", name: "Contact Me", id: "contact-me" },
  ];

  return (
    <>


      <div className="flex h-16 justify-between relative">
        <span>
          <img src={logo} alt="" className="h-full" />
        </span>
        
        <section
          id="nav-span"
          className="flex items-center duration-1000 gap-16 w-6/12 h-screen justify-center bg-slate-100
          z40"
        >
          <span className="h-3/6">
            <h3 className="text-2xl">Social Media</h3>
            {Social.map((social) => (
              <a
                className="overflow-hidden z-50"
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
              <a className="overflow-hidden z-50" href={menu.id} key={menu.key}>
                <h3 className="MouseOver font-semibold text-5xl my-4 afterelement px-4 py-2">
                  {menu.name}
                </h3>
              </a>
            ))}
          </span>
        </section>
        <button className="relative h-12 w-12 grid place-items-center mt-2 mr-4">
          <RxCross2
            className="z-50 absolute hidden text-4xl CrossHasClick"
            onClick={CrossClick}
          />
          {/* <RxCross1
            className="z-50 absolute hidden text-4xl CrossHasClick"
            onClick={CrossClick}
          /> */}
          <CgMenuLeft
            className="z-50 absolute text-4xl BurgerHasClick"
            onClick={BurgerClick}
          />
        </button>
      </div>
    </>
  );
};

export default NavBar;
