const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `<span>${taskText}</span><button class="delete"><ion-icon name="trash-outline"></ion-icon></button>`;

    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    taskList.appendChild(li);
    taskInput.value = "";

    const deleteButton = li.querySelector(".delete");
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(li);
    });
  }
});