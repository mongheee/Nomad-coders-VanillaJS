const images = [
  "jaeA.jpg",
  "jaeB.jpg",
  "jaeC.jpg",
  "jaeD.png",
  "jaeE.jpg",
  "jaeF.jpg",
  "jaeG.jpg",
  "jaeH.jpg",
  "jaeI.jpg",
];

// 랜덤으로 이미지 가져오기
const choseImage = images[Math.floor(Math.random() * images.length)];

// html에 추가할 element 생성하기
const baImage = document.createElement("img");
baImage.src = `img/${choseImage}`;

// element HTML에 추가하기
document.body.appendChild(baImage);
