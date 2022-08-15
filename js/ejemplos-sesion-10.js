//Sesion 10 eventos del DOM
//!Ejemplo1
// const title = document.getElementById("title");

// const redButton = document.getElementById("red");

// const blueButton = document.getElementById("blue");

// const blackButton = document.getElementById("black");

// redButton.addEventListener("click", function () {
//   title.style = "color: red;";
// });

// blueButton.addEventListener("click", function () {
//   title.style = "color: blue;";
// });

// blackButton.addEventListener("click", function () {
//   title.style = "color: black;";
// });
//*Ejemplo2
const titleText = document.getElementById("titleText");
const input = document.getElementById("text");
input.addEventListener("input", function (event) {
  titleText.textContent = event.target.value;
});
//?Ejemplo3
window.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    document.body.style.background = "lightblue";
  }

  if (event.key == "Enter" && event.ctrlKey) {
    document.body.style.background = "orange";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    document.body.style.background = "";
  }
});
//!Reto1
const ballon = document.getElementById("ballon");
let fontSize = ballon.style.fontSize;
fontSize = parseInt(fontSize.substring(0, fontSize.length - 2), 10);
function updateFontSize(size) {
  fontSize = size;
  ballon.style.fontSize = fontSize + "px";
}
function ballonSize(e) {
  if (e.key == "ArrowUp") {
    if (fontSize >= 80) {
      ballon.textContent = "💥";
      document.body.removeEventListener("keydown", ballonSize);
    } else {
      updateFontSize(fontSize * 1.1);
      e.preventDefault();
    }
  } else if (e.key == "ArrowDown") {
    updateFontSize(fontSize * 0.9);
    e.preventDefault();
  }
}
document.body.addEventListener("keydown", ballonSize);

//*Reto2
function modalOpenClose(e) {
  modal = document.getElementById("modal");
  if (modal.style.display == "none" || modal.style.display == "") {
    modal.style.display = "flex";
    document.getElementById("modal-image").src =
      "https://i.pinimg.com/736x/59/e8/15/59e8158007c292283ca8a2402b0ba9a8.jpg";
  } else {
    modal.style.display = "none";
  }
}
const modalButton = document.getElementById("btnModal");
const closeButton = document.getElementsByClassName("close");
modalButton.addEventListener("click", modalOpenClose);
closeButton[0].addEventListener("click", modalOpenClose);
//!Reto3

function createTabs(node) {
  const tabsList = Array.from(node.children).map(function (tab) {
    const tabButton = document.createElement("button");
    tabButton.textContent = tab.getAttribute("data-tabname");
    const navTab = {
      node: tab,
      button: tabButton,
    };
    tabButton.addEventListener("click", function () {
      return changeViewTab(navTab);
    });
    return navTab;
  });
  const buttonList = document.createElement("div");
  for (tab of tabsList) {
    buttonList.appendChild(tab.button);
  }
  node.insertBefore(buttonList, node.firstChild);
  function changeViewTab(actualTab) {
    for (tab of tabsList) {
      const selected = tab === actualTab;
      tab.node.style.display = selected ? "" : "none";
      tab.button.style.color = selected ? "red" : "";
    }
  }
}

createTabs(document.querySelector("#tab-panel"));
