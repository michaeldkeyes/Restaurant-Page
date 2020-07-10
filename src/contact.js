const contact = () => {
  const content = document.querySelector("#content");

  const newActive = document.getElementById("contact");
  newActive.classList.add("active");

  const main = document.createElement("main");
  const form = document.createElement("form");
  const h1 = document.createElement("h1");

  main.classList.add("main-contact");
  h1.innerHTML = "Send us an email";

  content.appendChild(main);
  main.appendChild(form);
  form.appendChild(h1);

  const forHtml = ["name", "email", "title"];
  const labelText = ["Your Name", "Email", "Title"];
  const attributes = ["text", "text", "email"];

  for (let i = 0; i < 3; i++) {
    const div = document.createElement("div");
    const label = document.createElement("label");
    label.htmlFor = forHtml[i];
    label.innerHTML = labelText[i];
    const input = document.createElement("input");
    input.setAttribute("type", attributes[i]);
    input.name = forHtml[i];
    input.required = true;

    form.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
  }

  const messageLabel = document.createElement("label");
  messageLabel.htmlFor = "message";
  messageLabel.innerHTML = "Message";
  const textarea = document.createElement("textarea");
  textarea.name = "message";
  textarea.cols = "30";
  textarea.rows = "10";
  textarea.required = true;

  const button = document.createElement("button");
  button.innerHTML = "Send";

  const section = document.createElement("section");
  section.classList.add("info-section");

  form.appendChild(messageLabel);
  form.appendChild(textarea);
  form.appendChild(button);
  main.appendChild(section);

  const faClasses = [
    "fa-coffee",
    "fa-phone",
    "fa-envelope",
    "fa-map-marked-alt",
  ];
  const h3Text = ["Opening Hours", "Phone", "Email", "Location"];
  const pText = [
    "7:00am - 10:00pm",
    "(555)555-5555",
    "inquiry@restaurant.com",
    "Somewhere",
  ];

  for (let j = 0; j < 4; j++) {
    const div = document.createElement("div");
    const fa = document.createElement("i");
    fa.classList.add("fa");
    fa.classList.add(faClasses[j]);
    const h3 = document.createElement("h3");
    h3.innerHTML = h3Text[j];
    const p = document.createElement("p");
    p.innerHTML = pText[j];

    section.appendChild(div);
    div.appendChild(fa);
    div.appendChild(h3);
    div.appendChild(p);
  }
};

export default contact;
