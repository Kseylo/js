const section = document.querySelector(".test");
console.log(section);

const message = document.createElement("div");
message.textContent = "We use cookies";
section.append(message);
message.addEventListener("click", () => message.remove());

// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";
console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes
