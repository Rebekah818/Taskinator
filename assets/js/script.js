
// button functionality
var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#tasks-to-do");




// make createTaskHandler to dynnamically create the task item

var createTaskHandler = function(event) {

    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "this is a new task.";
    taskToDoEl.appendChild(listItemEl);

};

formEl.addEventListener("submit", createTaskHandler);
