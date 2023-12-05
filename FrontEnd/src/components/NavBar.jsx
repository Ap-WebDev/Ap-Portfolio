import logo from "../assets/logo.jpg";

const NavBar = () => {
  const Navcrsr = document.querySelector("#NavMouOver");
  document.addEventListener("mousemove", (dets) => {
    // console.log(dets.x,dets.y)
    Navcrsr.style.top = dets.y - 5 + "px";
    Navcrsr.style.left = dets.x - 5 + "px";
  });

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
    <div className="flex h-16 justify-between relative">
      <div
        className="h-3 w-3 bg-black rounded-full absolute"
        id="NavMouOver"
      ></div>
      <span>
        <img src={logo} alt="" className="h-full" />
      </span>

      <section
        id="nav-span"
        className="flex items-center gap-16 w-6/12 h-screen justify-center bg-slate-100
        z-50"
      >
        <span className="h-3/6">
          <h3 className="">Social Media</h3>
          {Social.map((social) => (
            <a className="overflow-hidden" href={social.Link} key={social.key}>
              <h3 className=" text-xl my-4">{social.Name}</h3>
            </a>
          ))}
        </span>
        <span className="h-3/6">
          <h3 className="">Menu</h3>
          {Menu.map((menu) => (
            <a className="overflow-hidden" href={menu.id} key={menu.key}>
              <h3 className="MouseOver font-bold text-5xl my-4 afterelement border-2 border-sky-500 px-4 py-2">
                {menu.name}
              </h3>
            </a>
          ))}
        </span>
      </section>
    </div>
  );
};

export default NavBar;
