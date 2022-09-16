const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
// 바로 실행
getClock();
// 1초 후 실행
setInterval(getClock, 1000);
// 5초 후 한번만 실행
// setTimeout(sayHello, 5000);




// string 앞과 뒤에 숫자붙이기 string이어야함 number은 안됨
// .padStart, .padEnd
// ex)
/*
    "hello".padStart(20, "x");
    --> xxxxxxxxxxxhello (x를 포함한 글자가 20)
*/