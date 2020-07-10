import { changeToMenu } from "./buttonListeners.js";

const homePage = () => {
  const content = document.querySelector("#content");

  const newActive = document.getElementById("home");
  newActive.classList.add("active");

  const main = document.createElement("main");
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const h1 = document.createElement("h1");
  const breakfast = document.createElement("span");
  const coffee = document.createElement("span");
  const pancakes = document.createElement("span");
  const button = document.createElement("button");

  main.classList.add("main-home");
  h2.innerHTML = "We offer the best";
  breakfast.innerHTML = "breakfast.";
  coffee.innerHTML = " coffee.";
  pancakes.innerHTML = " pancakes.";
  button.classList.add("menu-button");
  button.innerHTML = "View our menu";
  button.addEventListener("click", () => {
    content.innerHTML = "";
    changeToMenu();
  });

  content.appendChild(main);
  main.appendChild(div);
  div.appendChild(h2);
  div.appendChild(h1);
  h1.appendChild(breakfast);
  h1.appendChild(coffee);
  h1.appendChild(pancakes);
  div.appendChild(button);
};

export default homePage;
