import _ from "lodash";
import {chart} from "./chartTest.js";

function component() {
  const element = document.createElement("div");
  const canvasElement = document.createElement("canvas");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  canvasElement.id = "myChart";

  return {element, canvasElement};
}


document.body.appendChild(component().element);
document.body.appendChild(component().canvasElement);
chart(document.getElementById("myChart"));
