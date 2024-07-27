let todolist = [];
const addtask = document.getElementById("addTask");
addtask.addEventListener("click",addtodoiterm );
function addtodoiterm() {
    
    let iterm = document.getElementById("todoInput").value;
    todolist.push(iterm);
    let list = document.getElementById("todolist");
    let listiterm = document.createElement("div");
    listiterm.className = "todoiterm";
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () {
        if (checkbox.checked) {
            itermtext.style.textdecoration = "line-through";
            listiterm.classList.add("checked");

        } else {
            itermtext.style.textdecoration = "none";
            listiterm.classList.remove("checked");

        }


    }
    listiterm.appendChild(checkbox);
    let itermtext = document.createElement("span");
    itermtext.textContent = iterm;
    listiterm.appendChild(itermtext);
    let buttonsdiv = document.createElement("div");
    listiterm.appendChild(buttonsdiv);
    let editbutton = document.createElement("button");
    editbutton.innerHTML = '<i class="fas fa-edit"></i>';
    editbutton.onclick = function () {
        itermtext.contentEditable = true;
        itermtext.focus;
    }
    buttonsdiv.appendChild(editbutton);
    itermtext.onblur = function () {
        itermtext.contentEditable = false;
        todolist[todolist.indexOf(iterm)] = itermtext.textContent;

    }
    let deletebutton = document.createElement("button");
    deletebutton.innerHTML = '<i style="border:1px solid red; color:red; padding:10px;" class="fas fa-trash">delete</i>';
    deletebutton.onclick = function () {
        list.removeChild(listiterm);
        todolist.splice(todolist.indexOf(iterm), 1);


    }

    buttonsdiv.appendChild(deletebutton);
    list.appendChild(listiterm);
    document.getElementById("todoInput").value = "";








}
