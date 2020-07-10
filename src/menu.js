const menu = () => {
  const content = document.querySelector("#content");

  const newActive = document.querySelector("#menu");
  newActive.classList.add("active");

  const main = document.createElement("main");
  main.classList.add("main-menu");

  const menuHeaders = ["Breakfast", "Coffee", "Pancakes"];
  const menuItems = [
    ["ham and egg", "bacon and cheese", "tuna salad", "beef soup"],
    ["cappucino", "cafe latte", "americano", "mocha"],
    ["banana nut", "oatmeal raisin", "blueberry", "chocolate chip"],
  ];

  for (let i = 0; i < 3; i++) {
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const ul = document.createElement("ul");

    h2.innerHTML = menuHeaders[i];

    content.appendChild(main);
    main.appendChild(section);
    section.appendChild(h2);
    section.appendChild(ul);

    for (let j = 0; j < 4; j++) {
      const li = document.createElement("li");
      li.innerHTML = menuItems[i][j];
      ul.appendChild(li);
    }
  }
};

export default menu;
