

var buttonEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#tasks-to-do");




// make createTaskHandler to dynnamically create the task item

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "this is a new task.";
    taskToDoEl.appendChild(listItemEl);

};

buttonEl.addEventListener("click", createTaskHandler);