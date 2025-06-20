// Add row feature
const addRowFeature = document.getElementById("add-row");
const addColFeature = document.getElementById("add-column")
const tbody = document.querySelector("table tbody");

addRowFeature.onclick = function () {
  const cols = tbody.rows[0].cells.length;
  const tr = document.createElement("tr");
  for (let i = 0; i < cols; i++) tr.appendChild(document.createElement("td"));
  tbody.appendChild(tr);
};


// Add-columns feature
addColFeature.onclick = function () {
  for (let row of tbody.rows) {
    row.appendChild(document.createElement("td"));
  }
};

//change color
const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
  console.log(event.target.style.backgroundColor);
  const color = document.getElementById("color-select");
  if(event.target.tagName == "TD"){
    const selected = color.value;
    event.target.style.backgroundColor = selected;
  }
  const uncoloredButton = document.getElementById("fill-uncolored grid"); //fill uncolored grid
  uncoloredButton.addEventListener("click", () => {
    allTD = document.querySelectorAll('td');
    allTD.forEach(td => {
      if(td.style.backgroundColor == ""){
        const selected = color.value;
        td.style.backgroundColor = selected;
      }
    });
  });
  const fillButton = document.getElementById("fill-grid");//fill grid
  fillButton.addEventListener("click", () => {
    allTD = document.querySelectorAll('td');
    allTD.forEach(td => {
      const selected = color.value;
      td.style.backgroundColor = selected;
    });
  });
});
