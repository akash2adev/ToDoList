
document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskCounter = document.getElementById("taskCounter");

    // Add Task Function
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return; // Prevent adding empty tasks
        
        const li = document.createElement("li");
        li.classList.add("task-item");

        // Task content
        const taskContent = document.createElement("span");
        taskContent.textContent = taskText;

        // Checkbox for task completion
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        // Event listeners
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                li.classList.add("completed");
            } else {
                li.classList.remove("completed");
            }
        });

        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(li);
            updateTaskCount();
        });

        // Append elements to the list item
        li.appendChild(checkbox);
        li.appendChild(taskContent);
        li.appendChild(deleteBtn);

        // Add the list item to the task list
        taskList.appendChild(li);
        taskInput.value = ""; // Clear input box

        updateTaskCount(); // Update task count
    }

    // Update task count
    function updateTaskCount() {
        const totalTasks = taskList.getElementsByTagName("li").length;
        taskCounter.textContent = `Total tasks: ${totalTasks}`;
    }

    // Add task when clicking the Add button
    addBtn.addEventListener("click", addTask);

    // Add task when pressing the Enter key
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Disable the Add button if the input is empty
    taskInput.addEventListener("input", () => {
        addBtn.disabled = taskInput.value.trim() === "";
    });
});
