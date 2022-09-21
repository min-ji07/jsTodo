const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";

let toDos = [];
// todo localStorage에 저장하기
// array는 localStorage에 저장할 수 없음(오직 텍스트만)

// array나 javascript코드 상관없이 string으로 만들어줌
// JSON.stringify();
// string을 array로 만들어줌
// JSON.parse();


// toDos array의 내용을 localStorage에 담기
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


// todo 삭제하기
function deleteTodo(event, newTodoObj){
    console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
    console.log(typeof li.id);
                                            // number로 변환
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

// li태그 / span태그 만들기
function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id = newTodo.id;
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "--";
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
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// localStorage에 저장되어 있는 date를 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
                        // localStorage에 저장되어 있는 date를 배열로 바꿔서 넣어줌
    const parsedToDos = JSON.parse(savedToDos);
    // 위에 비어있는 배열에 배열로 바꿔준 변수 paredToDos를 넣어준다
    toDos = parsedToDos;
    // 배열 parsedToDos 를 돌면서 갯수만큼의 태그 만들기(태그만들기 기능은 위에서 가져옴)
    parsedToDos.forEach(paintTodo);
}

