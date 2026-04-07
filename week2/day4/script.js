let tasks = []

window.onload = function(){
    let data = localStorage.getItem("tasks")

    if(data){
        tasks = JSON.parse(data)
        showTasks()
    }
}

function addTask(){
    let text = document.getElementById("taskInput").value
    let date = document.getElementById("dateInput").value

    if( text == "" || date == ""){
        alert("Please fill date or input")
        return
    }

    let task = {
        text : text,
        date : date,
        done: false
    }

    tasks.push(task)
    saveData()
    showTasks()
}

function saveData(){
    localStorage.setItem("tasks",JSON.stringify(tasks))
}

function showTasks(){
    let list = document.getElementById("list")
    list.innerHTML = ""
    
    tasks.forEach(function(task,index){
        let li = document.createElement("li")

        li.innerHTML =
        `
        <span class  = "${task.done ?'done' : ""}">
         ${task.text} (${task.date})
         </span>
          <div>
        <button onclick="toggleTask(${index})">✔</button>
        <button onclick="deleteTask(${index})">❌</button>
      </div>
        `
        list.appendChild(li)
    })
}

function toggleTask(index){
    tasks[index].done = !tasks[index].done
    saveData()
    showTasks()
}

function deleteTask(index){
    tasks.splice(index,1)
    saveData()
    showTasks()
}