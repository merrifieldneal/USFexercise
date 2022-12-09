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
    newTodo.isCompleted = savedTodos[i].iscompleted ? true : false;
    if (newTodo.isCompleted) {
        newTodo.style.textDecoration = 'line-through';
    }
    const newButton = document.createElement("button");
    newButton.innerText = "X";
    newTodo.append(newButton);
    todoList.appendChild(newTodo);
}
// remove task 
todoList.addEventListener('click', function (e) {
    const help = e.target.parentElement;
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();

        localStorage.removeItem("todos");
        for (let i = 0; i < savedTodos.length; i++) {
            if (savedTodos[i] === e.target.innerText) {
                savedTodos.remove();
            }
        }
        console.log(savedTodos);
        savedTodos = '';
        localStorage.setItem("todos", JSON.stringify(savedTodos));
        //delete savedTodos[0];
    }
})
// seperate listener for line through 
// todoList.addEventListener("click", function (event) {
//     let clickedListItem = event.target;
//     console.log('you clicked it');

//     if (!clickedListItem.isCompleted) {
//         clickedListItem.style.textDecoration = "line-through";
//         clickedListItem.isCompleted = true;
//     } else {
//         clickedListItem.style.textDecoration = "none";
//         clickedListItem.isCompleted = false;
//     }

//     breaks for duplicates - another option is to have dynamic IDs
//     for (let i = 0; i < savedTodos.length; i++) {
//         if (savedTodos[i].task === clickedListItem.innerText) {
//             savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
//             localStorage.setItem("todos", JSON.stringify(savedTodos));
//         }
//     }
// });
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

