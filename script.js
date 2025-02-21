// Lógica em JavaScript
document.getElementById("addButton").addEventListener("click", function () {
  var tarefaInput = document.getElementById("tarefaInput");
  var tarefa = tarefaInput.value;

  if (tarefa.trim() !== "") {
    var li = document.createElement("li");
    li.textContent = tarefa;
    document.getElementById("listaTarefas").appendChild(li);
    tarefaInput.value = "";
  }
});
