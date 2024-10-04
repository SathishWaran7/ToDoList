const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task');
addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value;
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }
    addTask(taskText);
    taskInput.value = ''; 
});
function addTask(taskText) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteButton = createDeleteButton();
    const updateButton = createUpdateButton(span);

    li.appendChild(span);
    li.appendChild(updateButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}
function createDeleteButton() {
    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.addEventListener('click', function() {
        taskList.removeChild(this.parentElement);
    });
    return button;
}
function createUpdateButton(taskItem) {
    const button = document.createElement('button');
    button.textContent = 'Update';
    button.className = 'update';
    button.addEventListener('click', function() {
        const newTaskText = prompt('Update the task:', taskItem.textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskItem.textContent = newTaskText;
        }
    });
    return button;
}
