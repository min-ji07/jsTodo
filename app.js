const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// user id 넘기기
function onLoginSubmit(event){
    // 브라우저의 기본 동작을 멈춰줌
    // ex) submit의 기본 동작은 입력 후 엔터나 클릭시 window가 reload된다는 것인데 그것을 멈춰줌
    event.preventDefault();
    // dir은 해당 요소에서 무엇을 가져오고 싶은지 확인할 때 유용함
    // console.dir(loginInput);
    // console.log(loginInput.value);    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = "Hello " + username;
    // 이렇게 하면 hello뒤에 공백을 둘 필요가 없음
    paintGreetings(username);
}

// h1요소에 text추가해주기
function paintGreetings(username){
    greeting.innerText =  `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 정보 기억하기 / api - local storage
const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}







// const link = document.querySelector("a");
// function handleLinkClick(event){
//     console.log(event);
//     alert("click");
// }

// link.addEventListener("click", handleLinkClick)