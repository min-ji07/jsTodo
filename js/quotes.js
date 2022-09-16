const quotes = [
    {
        quote: "외로움에 빠지지 말고 외로움이 세상을 보는 창문이라고 생각해라. 사람은 누구나 외롭다. 그걸 어떤 사람은 감옥으로 여기고 어떤 사람은 손을 내밀 문으로 여길 것이다.",
        author: "-김창완-"
    },
    {
        quote: "우정의 척도는 피해를 주지 않는 능력이 아니라 남의 잘못을 받아들이고 자신의 실수에 용서를 구하는 능력이다.",
        author: "-랜디 K.밀홀랜드-"
    },
    {
        quote: "올해도 기쁜 일과 슬픈 일이 있었습니다. 사는 건 그런 건가 봅니다.",
        author: "-심슨-"
    },
    {
        quote: "구름은 걷힐거에요. 얼굴을 펴세요.",
        author: "-심슨-"
    },
    {
        quote: "넌 잘 할 수 있어 네가 하고 싶은 대로 해. 슬픔을 다 이겨냈을 때도 우린 네 곁에 있어.",
        author: "-심슨-"
    },
    {
        quote: "하지만 우리 엄마가 그러는데 기회 하나가 사라지면, 다른 기회가 열린대요",
        author: "-심슨-"
    },
    {
        quote: "다 머리하곤 상관 없습니다. 중요한 건 자신감이죠",
        author: "-심슨-"
    },
    {
        quote: "자기 실수를 용기 있게 인정할때도 영웅은 탄생한단다",
        author: "-심슨-"
    },
    {
        quote: "이미 너는 그거보다 더 중요한 뭔가를 가지고 있으니까.",
        author: "-심슨-"
    },
    {
        quote: "삶을 사는 방법은 두가지 밖에 없다. 하나는 기적이 없다고 생각하며 사는 것이고 다른 하나는 모든 것이 기적이라고 생각하며 사는것이다.",
        author: "-아인슈타인-"
    },
    
];

// 랜덤 명언
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

// 랜덤 배경이미지
const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImage}`;
// body안에 bgImg를 추가하는 메소드
document.body.appendChild(bgImg);