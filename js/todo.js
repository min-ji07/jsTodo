const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

// todo 삭제하기
function deleteTodo(event){
    console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
    // toDoList.removeChild(li);
}

// li태그 / span태그 만들기
function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "삭제";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

// submit / input에 todo 작성 후 input 리셋
function handleToDoSubmit(event){
    // 새로고침 방지
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintTodo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
