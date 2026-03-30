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
    const list = document.createElement("li");
    list.textContent = inputTask.value;
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
