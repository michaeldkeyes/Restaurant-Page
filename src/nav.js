import {
  changeToHome,
  changeToMenu,
  changeToContact,
} from "./buttonListeners.js";

const nav = () => {
  const content = document.querySelector("#content");

  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const logo = document.createElement("span");
  const ul = document.createElement("ul");
  const homeNav = document.createElement("li");
  const menuNav = document.createElement("li");
  const contactNav = document.createElement("li");

  homeNav.addEventListener("click", () => {
    content.innerHTML = "";
    changeToHome();
  });
  menuNav.addEventListener("click", () => {
    content.innerHTML = "";
    changeToMenu();
  });
  contactNav.addEventListener("click", () => {
    content.innerHTML = "";
    changeToContact();
  });

  logo.innerHTML = "Restaurant";
  logo.classList.add("logo");
  homeNav.innerHTML = "home";
  homeNav.id = "home";
  menuNav.innerHTML = "menu";
  menuNav.id = "menu";
  contactNav.innerHTML = "contact";
  contactNav.id = "contact";

  content.appendChild(header);
  header.appendChild(nav);
  nav.appendChild(logo);
  nav.appendChild(ul);
  ul.appendChild(homeNav);
  ul.appendChild(menuNav);
  ul.appendChild(contactNav);
};

export default nav;
