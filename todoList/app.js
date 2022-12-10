const todoList = document.body.querySelector('#todoList');
const submitTaskButton = document.body.querySelector('form button');
const submitField = document.body.querySelector('form input');
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
//console.log(savedTodos);

//create variable from existing localStorage
for (let i = 0; i < savedTodos.length; i++) {
    // iterate through each saved li entry
    let newTodo = document.createElement('li');
    newTodo.innerText = savedTodos[i].task;
    newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
    if (newTodo.isCompleted) {
        newTodo.className = 'line';
    }
    const newButton = document.createElement("button");
    newButton.innerText = "X";
    newTodo.append(newButton);
    todoList.appendChild(newTodo);
}

// remove task linethrough
todoList.addEventListener('click', function (e) {
    const { help } = JSON.parse(localStorage.getItem('todos'));
    //console.log(help);
    //let clickedListItem = e.target;
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
        for (let i = 0; i < savedTodos.length; i++) {
            let taskX = (e.target.parentElement.innerText).slice(0, (e.target.parentElement.innerText.length - 1));
            // focus on what data we are comparing here.
            if (savedTodos[i].task === taskX) {
                savedTodos.splice([i], 1);
            }
        }
        localStorage.setItem("todos", JSON.stringify(savedTodos));
        //delete savedTodos[0];
    }
    if (e.target.tagName === 'LI') {
        if (!e.target.isCompleted) {
            e.target.style.textDecoration = "line-through";
            e.target.isCompleted = true;
        } else {
            e.target.style.textDecoration = "none";
            e.target.isCompleted = false;
        }

        //breaks for duplicates - another option is to have dynamic IDs
        for (let i = 0; i < savedTodos.length; i++) {
            let taskX = (e.target.innerText).slice(0, (e.target.innerText.length - 1));
            if (savedTodos[i].task === taskX) {
                savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
                localStorage.removeItem('todos');
                localStorage.setItem("todos", JSON.stringify(savedTodos));

            }

        }

    }
})

// add task
submitTaskButton.addEventListener('click', function (e) {
    e.preventDefault();
    const newLi = document.createElement("li");
    const newButton = document.createElement("button");
    newLi.innerText = submitField.value;
    newLi.isCompleted = false;
    savedTodos.push({ task: newLi.innerText, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    newButton.innerText = "X";
    newLi.append(newButton);

    todoList.append(newLi);
    submitField.value = '';

})

