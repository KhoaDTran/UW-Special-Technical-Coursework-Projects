'use strict';

/* your code goes here! */
class Task {

  constructor(description, complete) {
    this.description = description;
    this.complete = complete;
  }

  toggleFinished() {
    if (this.complete) {
      this.complete = false;
    } else {
      this.complete = true;
    }
  }

  render() {
    let liEle = document.createElement('li');
    liEle.textContent = this.description;
    if (this.complete) {
      liEle.classList.add('font-strike');
    }
    liEle.addEventListener('click', () => {
      liEle.classList.remove('font-strike');
      this.toggleFinished();
    });
    return liEle;
  }
}

class TaskList {
  constructor(tasks) {
    this.tasks = tasks;
  }

  addTask(description) {
    let newT = new Task(description, false);
    this.tasks.push(newT);
  }

  render() {
    let olEle = document.createElement('ol');
    this.tasks.forEach(task => 
      olEle.appendChild(task.render()));
    return olEle;
  }
}

class NewTaskForm {
  constructor(callback) {
    this.submitCallback = callback;
  }

  render() {
    let formEle = document.createElement('form');
    let inputEle = document.createElement('input');
    inputEle.classList.add('form-control', 'mb-3');
    inputEle.setAttribute('placeholder', 'What else do you have to do?');
    formEle.appendChild(inputEle);

    let buttonEle = document.createElement('button');
    buttonEle.classList.add('btn', 'btn-primary');
    buttonEle.textContent = 'Add task to list';
    buttonEle.addEventListener("click", (event) => {
      event.preventDefault();
      this.submitCallback(inputEle.value);
    });
    formEle.appendChild(buttonEle);
    return formEle;
  }
}

class App {

  constructor(parentElement, taskList) {
    this.parentElement = parentElement;
    this.taskList = taskList;
  }

  addTaskToList(description) {
    this.taskList.addTask(description);
    while (this.parentElement.firstChild) {
        this.parentElement.removeChild(this.parentElement.firstChild);
    }
    this.render();
  }

  render() {
    this.parentElement.appendChild(this.taskList.render());
    let newForm = new NewTaskForm((description) => {
      this.addTaskToList(description);
    });
    this.parentElement.appendChild(newForm.render());
  }

}

let taskList = [];
taskList.push(new Task("Make some classes", true));
taskList.push(new Task("Arrow some functions", false));
let newTaskList = new TaskList(taskList);
let newApp = new App(document.getElementById("app"), newTaskList);
newApp.render();

//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof Task !== 'undefined') 
    module.exports.Task = Task;
  if(typeof TaskList !== 'undefined') 
    module.exports.TaskList = TaskList;
  if(typeof NewTaskForm !== 'undefined') 
    module.exports.NewTaskForm = NewTaskForm;
  if(typeof App !== 'undefined') 
    module.exports.App = App;
}
