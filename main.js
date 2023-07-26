document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
  
    taskForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const titleInput = document.getElementById('title');
      const descriptionInput = document.getElementById('description');
  
      const title = titleInput.value.trim();
      const description = descriptionInput.value.trim();
  
      if (title === '' || description === '') {
        alert('Please fill in all fields.');
        return;
      }
  
      const newTask = createTask(title, description);
      taskList.appendChild(newTask);
  
      titleInput.value = '';
      descriptionInput.value = '';
    });
  
    function createTask(title, description) {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${title}</span>
        <div>
          <button class="delete-button">Delete</button>
          <button class="complete-button">Complete</button>
        </div>
      `;
  
      li.querySelector('.delete-button').addEventListener('click', function () {
        li.remove();
      });
  
      li.querySelector('.complete-button').addEventListener('click', function () {
        li.classList.toggle('completed');
      });
  
      return li;
    }
  });
  