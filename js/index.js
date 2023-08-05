import Model from "./Model.js";
import View from "./View.js";
import Controller from "./Controller.js";

window.addEventListener("DOMContentLoaded", function () {
  const model = new Model();
  const view = new View(model);
  const controller = new Controller(model, view);
});