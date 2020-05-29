const homePage = () => {
  const content = document.querySelector("#content");

  const bgimg = document.createElement("div");
  bgimg.classList.add("bgimg");
  content.appendChild(bgimg);

  const cafe = document.createElement("div");
  cafe.classList.add("cafe");
  const pCafe = document.createElement("p");
  pCafe.innerText = "cafe";
  cafe.appendChild(pCafe);
  bgimg.appendChild(cafe);

  const nav = document.createElement("div");
  nav.classList.add("nav");
  const menuButton = document.createElement("button");
  const contactButton = document.createElement("button");
  menuButton.innerText = "menu";
  contactButton.innerText = "contact";
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
  bgimg.appendChild(nav);

  const hours = document.createElement("div");
  hours.classList.add("hours");
  const pTimes = document.createElement("p");
  const pLocation = document.createElement("p");
  pTimes.innerText = "monday - friday 7am - 9pm";
  pLocation.innerText = "42 princess St, shepherdstown";
  hours.appendChild(pTimes);
  hours.appendChild(pLocation);
  bgimg.appendChild(hours);
};

export default homePage;
