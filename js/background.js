const images = ["jaeA.jpg", "jaeB.jpg", "jaeC.jpg", "jaeD.jpg", "jaeE.jpg"];

// 랜덤으로 이미지 가져오기
const choseImage = images[Math.floor(Math.random() * images.length)];

console.log(choseImage);

// html에 추가할 element 생성하기
const baImage = document.createElement("img");
baImage.src = `img/${choseImage}`;

console.log(baImage);

// element HTML에 추가하기
document.body.prepend(baImage);
