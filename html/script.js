document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('due-date').value;
        const priority = document.getElementById('priority').value;

        addTask(title, description, dueDate, priority);
        taskForm.reset();
    });

    function addTask(title, description, dueDate, priority) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <input type="checkbox">
            <span>${title}</span>
            <span>${dueDate}</span>
            <button class="delete-btn">Delete</button>
        `;

        taskItem.querySelector('input[type="checkbox"]').addEventListener('change', function() {
            taskItem.classList.toggle('completed');
        });

        taskItem.querySelector('.delete-btn').addEventListener('click', function() {
            taskItem.remove();
        });

        taskList.appendChild(taskItem);
    }
});
