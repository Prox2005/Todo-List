"use strict";
import Project from "./project.js";
import Task from "./task.js";

export { TaskUI };

const projects = [];

export default class GeneralUI {
  // main function
  createProject() {
    const project = new ProjectUI().newProject();
  }

  openForm(form) {
    const overlay = document.querySelector(".overlay");
    overlay.style.display = "flex";
    form.style.display = "flex";
  }

  closeForm(form) {
    const overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
    form.style.display = "none";
  }
}

class ProjectUI {
  newProject() {
    const button = document.querySelector(".new-project");

    button.addEventListener("click", function () {
      const form = document.querySelector(".form--project");
      new GeneralUI().openForm(form);
      const submit = document.querySelector(".form__button--add");

      submit.addEventListener("click", function () {
        const input = document.querySelector(".form__input--name");
        if (input.value) {
          new GeneralUI().closeForm(form);
          new ProjectUI().createProject(input);
          form.reset();
        }
      });

      const cancelButton = document.querySelector(".form__button--close");
      cancelButton.addEventListener("click", function () {
        new GeneralUI().closeForm(form);
      });
    });
  }

  createProject(input) {
    const project = new Project(input.value);
    projects.push(project);
    const indexNumber = projects.indexOf(project);

    const div = document.createElement("div");
    div.classList.add("project-container");
    div.dataset.project = indexNumber;

    const projectsContainer = document.querySelector(".projects");
    const projectButton = document.createElement("p");
    projectButton.dataset.project = indexNumber;
    projectButton.classList.add("project-name");

    const deleteButton = document.createElement("buttom");
    deleteButton.classList.add("delete-project");
    deleteButton.textContent = "remove";
    deleteButton.dataset.project = indexNumber;
    deleteButton.addEventListener("click", this.removeProject);

    projectButton.textContent = input.value;
    projectsContainer.appendChild(div);
    div.appendChild(projectButton);
    div.appendChild(deleteButton);

    projectButton.addEventListener("click", function () {
      const title = document.querySelector(".main__title");
      title.textContent = project.name;
      title.dataset.project = indexNumber;
      const button = document.querySelector(".new-todo ");
      button.style.display = "block";
      const intro = document.querySelector(".intro-text");
      intro.style.display = "none";
      project.projectClicked();
    });
  }

  removeProject(event) {
    const indexNumber = event.path[0].dataset.project;
    const div = event.path[1];
    div.remove();
    delete projects[indexNumber];
    const title = document.querySelector(".main__title");
    title.textContent = "You don't have any Projects";
    const newTodoButton = document.querySelector(".new-todo");
    newTodoButton.style.display = "none";
    const sections = document.querySelectorAll(".task-container");
    sections.forEach((section) => {
      section.remove();
    });
  }
}

class TaskUI {
  newTask() {
    const newTodoButton = document.querySelector(".main__new-todo");
    newTodoButton.addEventListener("click", function () {
      const form = document.querySelector(".form--todo");
      new GeneralUI().openForm(form);

      const submit = document.querySelector(".form__button--add--todo");
      submit.addEventListener("click", function () {
        const inputs = document.querySelectorAll(".form__input--todo");
        const title = inputs[0].value;
        const date = inputs[1].value;
        const priority = inputs[2].value;

        if (title && date && priority) {
          const projectName = document.querySelector(".main__title");
          const project = projects[projectName.dataset.project];

          const task = new Task(title, date, priority).taskObject();
          project.projectTasks.push(task);
          project.projectClicked();
          new GeneralUI().closeForm(form);
          form.reset();
        }
      });
      const cancel = document.querySelector(".form__button--close--todo");
      cancel.addEventListener("click", function () {
        const form = document.querySelector(".form--todo");
        new GeneralUI().closeForm(form);
      });
    });
  }
}
new TaskUI().newTask();
