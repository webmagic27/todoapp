document.addEventListener('DOMContentLoaded', function () {
    // Fetch tasks from the server and render them
    fetch('/tasks')
      .then(response => response.json())
      .then(tasks => renderTasks(tasks));
  
    // Function to render tasks
    function renderTasks(tasks) {
      const todoList = document.getElementById('todoList');
      todoList.innerHTML = '';
  
      tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        todoList.appendChild(listItem);
      });
    }
  
    // Function to add a new task
    window.addTask = function () {
      const taskInput = document.getElementById('taskInput');
      const task = taskInput.value;
  
      // Add task to the server
      fetch('/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task }),
      })
        .then(response => response.json())
        .then(tasks => renderTasks(tasks));
  
      // Clear input field
      taskInput.value = '';
    };
  });
  