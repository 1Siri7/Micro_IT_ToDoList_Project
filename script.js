function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle completed class on click
  li.onclick = function () {
    li.classList.toggle("completed");
  };

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
