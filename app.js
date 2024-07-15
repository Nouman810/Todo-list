let taskList = document.getElementById('task-list')

let inputBox = document.getElementById("input-box")

function addTask(){
    if(inputBox.value === ''){
        alert('Add Some Task')
    }
    else{
        let task = document.createElement('li')
        task.textContent = inputBox.value
        taskList.appendChild(task)

        //delete task
        let span = document.createElement('span');
        span.textContent = '\u00d7';
        task.appendChild(span)
    }

    inputBox.value = ''
    saveData()

}

taskList.addEventListener('click', (el) =>{
    if(el.target.tagName == 'LI'){
        el.target.classList.toggle('checked')
        saveData()
    }
    else if(el.target.tagName == 'SPAN'){
        el.target.parentElement.remove()
        saveData();
    }

})
//save and load tasks from local storage
function saveData(){
    localStorage.setItem("tasks",taskList.innerHTML)
}

function showData(){
    taskList.innerhtml = localStorage.getItem("tasks")
}

showData()