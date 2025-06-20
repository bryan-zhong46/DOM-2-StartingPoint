// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
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