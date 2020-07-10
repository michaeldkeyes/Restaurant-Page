import nav from "./nav.js";
import home from "./home.js";

nav();
const homeNav = document.getElementById("home");
homeNav.classList.add("active");
home();
