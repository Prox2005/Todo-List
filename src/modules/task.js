"use strict";

export default class Task {
  constructor(task, date, priority, project) {
    this.task = task;
    this.date = date;
    this.priority = priority;
    this.project = project;
  }

  taskObject() {
    return [this.task, this.date, this.priority];
  }
}
