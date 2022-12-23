"use strict";
import { TaskUI } from "./ui.js";

export default class Project {
  constructor(name, indexNumber) {
    this.name = name;
    this.indexNumber = indexNumber;
    this.projectTasks = [];
  }

  projectClicked() {
    const todosContainer = document.querySelector(".todos-container");
    if (this.projectTasks.length > 0) {
      const sections = document.querySelectorAll(".task-container");
      sections.forEach((section) => {
        section.remove();
      });
      this.projectTasks.forEach((task) => {
        const section = document.createElement("section");
        section.classList.add("task-container");
        section.dataset.task = this.projectTasks.indexOf(task);

        const buttonDone = document.createElement("button");
        buttonDone.classList.add("button-done");
        buttonDone.textContent = "Done";
        buttonDone.dataset;
        const tasks = this.projectTasks;
        buttonDone.addEventListener("click", function (event) {
          const buttonDone = event.path[0];
          const section = event.path[1];
          const indexNumber = section.dataset.task;
          delete tasks[indexNumber];
          buttonDone.remove();
          section.remove();
        });
        this.projectTasks = tasks;
        todosContainer.appendChild(section);

        for (const key of task) {
          const h2 = document.createElement("h2");
          h2.textContent = key;
          section.appendChild(h2);
        }
        section.appendChild(buttonDone);
      });
    } else if (this.projectTasks.length === 0) {
      const sections = document.querySelectorAll(".task-container");
      sections.forEach((section) => {
        section.remove();
      });
    }
  }
}
