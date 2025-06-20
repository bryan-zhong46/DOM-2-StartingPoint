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