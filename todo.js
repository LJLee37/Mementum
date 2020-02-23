const toDoForm = document.querySelector(".js-toDoForm"), 
    toDoInput = toDoForm.querySelector("input"), 
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = {};

function saveTodos()
{
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
    //
}
function paintTodo(text)
{
    
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";//change it into something cool.
    const span = document.createElement("span");
    const newId =  toDos.length + 1;
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event)
{
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = "";
}

function loadTodos()
{
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null)
    {
        const parsedToDos = JSON.parse(loadedToDos);
	parsedToDos.forEach(function(toDo){paintToDo(toDo.text);});
    }
}

function init()
{
    loadTodos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
