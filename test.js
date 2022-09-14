// const title = document.getElementById("title");
const h1 = document.querySelector(".hello");
console.dir(h1);

// event 주기
function handleTitleClick(){
    // console.log(h1.style.color);
    const currentColor = h1.style.color;
    let newColor;

    // if(currentColor == 'blue'){
    //     newColor = 'tomato';
    // }else{
    //     newColor = 'blue';
    // }
    // h1.style.color = newColor;

    // const clickedClass = "clicked";
    h1.classList.toggle("clicked");

    // 색상 랜덤
    /*
    const colors = ['red', 'blue', 'green', 'black', 'yellow', 'white'];
    const num = Math.floor(Math.random() * colors.length);
    h1.style.color = colors[num];
    */
}
// h1.addEventListener("click", handleTitleClick);
h1.onclick = handleTitleClick; // 이런식으로도 가능함

////////////////////////////////////////////////////////////////////////
function handleMouseEnter(){
    // console.log("mouse is here");
    h1.innerText = "mouse is here!";
}

function handleMouseLeave(){
    // console.log("mouse leave")
    h1.innerText = "mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("sos no wifi");
}
function handleWindowOnline(){
    alert("All Gooood!");
}



// mouse가 해당요소 안에 들어갈 때
h1.addEventListener("mouseenter", handleMouseEnter);
// mouse 밖으로 나올 때
h1.addEventListener("mouseleave", handleMouseLeave);
// window 사이즈 변경했을 때
window.addEventListener("resize", handleWindowResize);
// ctr c했을 때 경고문
window.addEventListener("copy", handleWindowCopy);
// wifi에 연결되어있는지 확인
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

