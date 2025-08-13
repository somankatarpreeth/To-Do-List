function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  // Add text
  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;
  textSpan.onclick = function () {
    li.classList.toggle("done");
  };

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(textSpan);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = ""; // clear input
}