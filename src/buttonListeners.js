import nav from "./nav.js";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

const content = document.querySelector("#content");

function changeToHome() {
  nav();
  home();
}

function changeToMenu() {
  nav();
  menu();
}

function changeToContact() {
  nav();
  contact();
}

export { changeToHome, changeToMenu, changeToContact };
