const createTask = document.getElementById("createTask");
const inputTask = document.getElementById("inputTask");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const doneBtn = document.getElementById("doneBtn");
const heading = document.getElementById("heading");

createTask.addEventListener("click", () => {
  inputTask.style.display = "block";
  addBtn.style.display = "block";
  doneBtn.style.display = "block";
});

addBtn.addEventListener("click", () => {
  if (inputTask.value !== "") {
    const list = document.createElement("list");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const taskText = document.createElement("span");
    taskText.textContent = inputTask.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";

    checkBox.addEventListener("click", () => {
      if (checkBox.checked) {
        taskText.style.textDecoration = "line-through";
        taskText.style.opacity = "0.5";
      } else {
        taskText.style.textDecoration = "none";
        taskText.style.opacity = "1";
      }
    });

    deleteBtn.addEventListener("click", () => {
      list.remove();
    });

    list.appendChild(checkBox);
    list.appendChild(taskText);
    list.appendChild(deleteBtn);
    taskList.appendChild(list);
    inputTask.value = "";
    heading.style.display = "block";
  } else {
    alert("Enter a Task!");
  }
});

doneBtn.addEventListener("click", () => {
  inputTask.style.display = "none";
  addBtn.style.display = "none";
  doneBtn.style.display = "none";
});
