//Sesion 9 Manipulacion de DOM
//!Ejemplo1
//!Se reviso en una pagina las etiquetas html mediante la herramienta de inspeccionar consola
const link = document.body.getElementsByTagName("a")[0];
console.log(link);
const title = document.getElementById("title");
console.log(title);
const subtitle = document.body.getElementsByClassName("subtitle")[0];
console.log(subtitle);

//*Ejemplo2
const paragraphs = document.body.getElementsByTagName("p");

console.log("Colección de nodos: ", paragraphs);

console.log("Primer nodo: ", paragraphs[0]);
console.log("Segundo nodo: ", paragraphs[1]);
console.log("Tercer nodo: ", paragraphs[2]);
document.body
  .getElementsByClassName("list-test")[0]
  .insertBefore(paragraphs[2], paragraphs[0]);
//?Ejemplo3
function createNode(type, child) {
  const node = document.createElement(type);

  if (typeof child === "string") {
    const text = document.createTextNode(child);
    node.appendChild(text);
  } else {
    node.appendChild(child);
  }

  return node;
}

console.log(createNode("h1", createNode("strong", "Hello World")));
document
  .getElementById("quote")
  .appendChild(createNode("footer", createNode("strong", "- Karl Popper")));
//!Reto1
const imageList = document.body
  .getElementsByClassName("imagenes")[0]
  .getElementsByTagName("img");
for (let i = imageList.length - 1; i >= 0; i--) {
  const node = imageList[i];
  if (node.alt) {
    const text = document.createTextNode(node.alt);
    node.parentNode.replaceChild(text, node);
  }
}
//Reto2
const data = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

function createTable(data) {
  let table = document.createElement("table");
  let headRows = Object.keys(data[0]);
  let tableHead = document.createElement("tr");
  for (head of headRows) {
    tableTitle = document.createElement("th");
    tableTitle.appendChild(document.createTextNode(head));
    tableHead.appendChild(tableTitle);
  }
  table.appendChild(tableHead);

  data.forEach(function (element) {
    const tableRow = document.createElement("tr");
    headRows.forEach(function (field) {
      const tableData = document.createElement("td");
      tableData.appendChild(document.createTextNode(element[field]));
      if (typeof element[field] === "number") {
        tableData.style.textAlign = "right";
      }
      tableRow.appendChild(tableData);
    });
    table.appendChild(tableRow);
  });
  return table;
}
document.getElementById("mountainsContainer").appendChild(createTable(data));
