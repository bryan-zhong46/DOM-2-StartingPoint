const addRowFeature = document.getElementById("add-row");
const addColFeature = document.getElementById("add-column")
const removeRowFeature = document.getElementById("remove-row")
const tbody = document.querySelector("table tbody");

// Add row feature
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

// Remove-rows feature
removeRowFeature.onclick = function () {
  if (tbody.rows.length > 0) {
    tbody.removeChild(tbody.rows[tbody.rows.length - 1]);
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
  
  //fill uncolored grid
  const uncoloredButton = document.getElementById("fill-uncolored grid"); 
  uncoloredButton.addEventListener("click", () => {
    allTD = document.querySelectorAll('td');
    allTD.forEach(td => {
      if(td.style.backgroundColor == ""){
        const selected = color.value;
        td.style.backgroundColor = selected;
      }
    });
  });
  
  //fill grid
  const fillButton = document.getElementById("fill-grid");
  fillButton.addEventListener("click", () => {
    allTD = document.querySelectorAll('td');
    allTD.forEach(td => {
      const selected = color.value;
      td.style.backgroundColor = selected;
    });
  });
});

// Bryan - remove column from grid
const removeColButton = document.getElementById("remove-column");
removeColButton.addEventListener("click", (event) => {
  
  // Collect al the rows in the table into an array
  const rows = Array.from(document.getElementsByTagName("tr"));

  // Remove the last child of each row
  for (const row of rows) {
    const lastChild = row.lastElementChild;
    if (lastChild) {
      row.removeChild(lastChild);
    }
  }

});

// clear grid
const clearButton = document.getElementById("clear-grid");
clearButton.addEventListener("click", (event) => {
  clearGrid();
});

function clearGrid() {
  const td = document.getElementsByTagName("td");

  for (let i = 0; i < td.length; i++) {
    td[i].style.backgroundColor = "";
  }
}

// click and hold to color the cells
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