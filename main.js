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