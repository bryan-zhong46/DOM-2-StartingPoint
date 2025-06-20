// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
let isMouseDown = false;
  root.addEventListener("mousedown", (event) => {
    if (event.target.tagName.toLowerCase() === "td") {
      isMouseDown = true;
      const color = document.getElementById("color-select");
      const selected = color.value;
      event.target.style.backgroundColor = selected;
    }
  });

root.addEventListener("mouseover", (event) => {
  if (isMouseDown && event.target.tagName.toLowerCase() === "td") {
    const color = document.getElementById("color-select");
    const selected = color.value;
    event.target.style.backgroundColor = selected;
  }
  });

  root.addEventListener("mouseup", () => {
    isMouseDown = false;
  });