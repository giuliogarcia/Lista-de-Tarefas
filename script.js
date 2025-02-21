// Lógica em JavaScript
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.innerHTML = `
        <span>${taskText}</span>
        <button class="complete" onclick="markComplete(this)">✔</button>
        <button onclick="removeTask(this)">❌</button>
    `;
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function markComplete(button) {
  let li = button.parentElement;
  li.classList.toggle("completed");
}

function removeTask(button) {
  let li = button.parentElement;
  li.remove();
}
