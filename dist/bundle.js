/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui.js */ \"./src/modules/ui.js\");\n\r\n\r\nnew _modules_ui_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().createProject();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ \"./src/modules/ui.js\");\n\r\n\r\n\r\nclass Project {\r\n  constructor(name, indexNumber) {\r\n    this.name = name;\r\n    this.indexNumber = indexNumber;\r\n    this.projectTasks = [];\r\n  }\r\n\r\n  projectClicked() {\r\n    const todosContainer = document.querySelector(\".todos-container\");\r\n    if (this.projectTasks.length > 0) {\r\n      const sections = document.querySelectorAll(\".task-container\");\r\n      sections.forEach((section) => {\r\n        section.remove();\r\n      });\r\n      this.projectTasks.forEach((task) => {\r\n        const section = document.createElement(\"section\");\r\n        section.classList.add(\"task-container\");\r\n        section.dataset.task = this.projectTasks.indexOf(task);\r\n\r\n        const buttonDone = document.createElement(\"button\");\r\n        buttonDone.classList.add(\"button-done\");\r\n        buttonDone.textContent = \"Done\";\r\n        buttonDone.dataset;\r\n        const tasks = this.projectTasks;\r\n        buttonDone.addEventListener(\"click\", function (event) {\r\n          const buttonDone = event.path[0];\r\n          const section = event.path[1];\r\n          const indexNumber = section.dataset.task;\r\n          delete tasks[indexNumber];\r\n          buttonDone.remove();\r\n          section.remove();\r\n        });\r\n        this.projectTasks = tasks;\r\n        todosContainer.appendChild(section);\r\n\r\n        for (const key of task) {\r\n          const h2 = document.createElement(\"h2\");\r\n          h2.textContent = key;\r\n          section.appendChild(h2);\r\n        }\r\n        section.appendChild(buttonDone);\r\n      });\r\n    } else if (this.projectTasks.length === 0) {\r\n      const sections = document.querySelectorAll(\".task-container\");\r\n      sections.forEach((section) => {\r\n        section.remove();\r\n      });\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n\r\n\r\nclass Task {\r\n  constructor(task, date, priority, project) {\r\n    this.task = task;\r\n    this.date = date;\r\n    this.priority = priority;\r\n    this.project = project;\r\n  }\r\n\r\n  taskObject() {\r\n    return [this.task, this.date, this.priority];\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskUI\": () => (/* binding */ TaskUI),\n/* harmony export */   \"default\": () => (/* binding */ GeneralUI)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/modules/project.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst projects = [];\r\n\r\nclass GeneralUI {\r\n  // main function\r\n  createProject() {\r\n    const project = new ProjectUI().newProject();\r\n  }\r\n\r\n  openForm(form) {\r\n    const overlay = document.querySelector(\".overlay\");\r\n    overlay.style.display = \"flex\";\r\n    form.style.display = \"flex\";\r\n  }\r\n\r\n  closeForm(form) {\r\n    const overlay = document.querySelector(\".overlay\");\r\n    overlay.style.display = \"none\";\r\n    form.style.display = \"none\";\r\n  }\r\n}\r\n\r\nclass ProjectUI {\r\n  newProject() {\r\n    const button = document.querySelector(\".new-project\");\r\n\r\n    button.addEventListener(\"click\", function () {\r\n      const form = document.querySelector(\".form--project\");\r\n      new GeneralUI().openForm(form);\r\n      const submit = document.querySelector(\".form__button--add\");\r\n\r\n      submit.addEventListener(\"click\", function () {\r\n        const input = document.querySelector(\".form__input--name\");\r\n        if (input.value) {\r\n          new GeneralUI().closeForm(form);\r\n          new ProjectUI().createProject(input);\r\n          form.reset();\r\n        }\r\n      });\r\n\r\n      const cancelButton = document.querySelector(\".form__button--close\");\r\n      cancelButton.addEventListener(\"click\", function () {\r\n        new GeneralUI().closeForm(form);\r\n      });\r\n    });\r\n  }\r\n\r\n  createProject(input) {\r\n    const project = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](input.value);\r\n    projects.push(project);\r\n    const indexNumber = projects.indexOf(project);\r\n\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"project-container\");\r\n    div.dataset.project = indexNumber;\r\n\r\n    const projectsContainer = document.querySelector(\".projects\");\r\n    const projectButton = document.createElement(\"p\");\r\n    projectButton.dataset.project = indexNumber;\r\n    projectButton.classList.add(\"project-name\");\r\n\r\n    const deleteButton = document.createElement(\"buttom\");\r\n    deleteButton.classList.add(\"delete-project\");\r\n    deleteButton.textContent = \"remove\";\r\n    deleteButton.dataset.project = indexNumber;\r\n    deleteButton.addEventListener(\"click\", this.removeProject);\r\n\r\n    projectButton.textContent = input.value;\r\n    projectsContainer.appendChild(div);\r\n    div.appendChild(projectButton);\r\n    div.appendChild(deleteButton);\r\n\r\n    projectButton.addEventListener(\"click\", function () {\r\n      const title = document.querySelector(\".main__title\");\r\n      title.textContent = project.name;\r\n      title.dataset.project = indexNumber;\r\n      const button = document.querySelector(\".new-todo \");\r\n      button.style.display = \"block\";\r\n      const intro = document.querySelector(\".intro-text\");\r\n      intro.style.display = \"none\";\r\n      project.projectClicked();\r\n    });\r\n  }\r\n\r\n  removeProject(event) {\r\n    const indexNumber = event.path[0].dataset.project;\r\n    const div = event.path[1];\r\n    div.remove();\r\n    delete projects[indexNumber];\r\n    const title = document.querySelector(\".main__title\");\r\n    title.textContent = \"You don't have any Projects\";\r\n    const newTodoButton = document.querySelector(\".new-todo\");\r\n    newTodoButton.style.display = \"none\";\r\n    const sections = document.querySelectorAll(\".task-container\");\r\n    sections.forEach((section) => {\r\n      section.remove();\r\n    });\r\n  }\r\n}\r\n\r\nclass TaskUI {\r\n  newTask() {\r\n    const newTodoButton = document.querySelector(\".main__new-todo\");\r\n    newTodoButton.addEventListener(\"click\", function () {\r\n      const form = document.querySelector(\".form--todo\");\r\n      new GeneralUI().openForm(form);\r\n\r\n      const submit = document.querySelector(\".form__button--add--todo\");\r\n      submit.addEventListener(\"click\", function () {\r\n        const inputs = document.querySelectorAll(\".form__input--todo\");\r\n        const title = inputs[0].value;\r\n        const date = inputs[1].value;\r\n        const priority = inputs[2].value;\r\n\r\n        if (title && date && priority) {\r\n          const projectName = document.querySelector(\".main__title\");\r\n          const project = projects[projectName.dataset.project];\r\n\r\n          const task = new _task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, date, priority).taskObject();\r\n          project.projectTasks.push(task);\r\n          project.projectClicked();\r\n          new GeneralUI().closeForm(form);\r\n          form.reset();\r\n        }\r\n      });\r\n      const cancel = document.querySelector(\".form__button--close--todo\");\r\n      cancel.addEventListener(\"click\", function () {\r\n        const form = document.querySelector(\".form--todo\");\r\n        new GeneralUI().closeForm(form);\r\n      });\r\n    });\r\n  }\r\n}\r\nnew TaskUI().newTask();\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;