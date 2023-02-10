import "../assets/css/style.css";
import "../assets/css/main.css";

const app = document.getElementById("app");
app.innerHTML = `<h1>Drag and Drop with vanilla javascript</h1>

    <div class='unloader'>
    <div class='dragme' draggable='true'></div>
    <div class='dragzone'>🎯 Drag Here!</div>
    </div>
`;

const init = () => {};

if ("draggable" in document.createElement("div")) {
  init();
}
