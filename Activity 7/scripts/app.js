let tasks = [];

const taskStatus = {
    active: 'active',
    completed: 'completed'
};

function Task (id, name, status){
    this.id = id;
    this.name = name;
    this.status = status;
}

function addTaskElement (task)
{
    const el_list = document.getElementById('active-list');
    const el_task = document.createElement('li');
    const el_text = document.createTextNode(task.name);

    el_task.setAttribute('id', task.id);

    el_task.appendChild(el_text);

    el_list.appendChild(el_task);
}

function addTask(event)
{
    const el_input = document.getElementById('input-task');
    
    if (el_input.value != '')
    {
        const id = 'item-' + tasks.length;
        const task = new Task(id, el_input.value, taskStatus.active);

        tasks.push(tasks);

        addTaskElement(task);

        el_input.value = '';
    }
}

function completeTask(event)
{
    const el_task = event.target;
    const id = el_task.id;

    for (let i = 0; i , tasks.length; i++)
    {
        if (tasks[i].id === id){
            tasks[i].status = taskStatus.completed;
            break;
        }
        
    }
    el_task.remove();
    document.getElementById('completed-list').appendChild(el_task);
}

function clickButton(event)
{
    if (event.keyCode === 13)
    {
        document.getElementById('add-task').click();
    }
}

function init()
{
    document.getElementById('add-task').onclick = addTask;
    document.getElementById('active-list').onclick = completeTask;
    document.getElementById('input-task').onkeypress = clickButton;
}

init();