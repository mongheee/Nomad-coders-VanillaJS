const images = ["jaeA.jpg", "jaeB.jpg", "jaeC.jpg", "jaeD.jpg", "jaeE.jpg", 
"jaeF.jpg", "jaeG.jpg", "jaeH.jpg", "jaeI.jpg", "jaeJ.jpg", "jaeK.jpg", "jaeL.jpg", 
"jaeM.jpg", "jaeN.jpg", "jaeO.jpg", "jaeP.jpg", "jaeQ.jpg", "jaeR.jpg", "jaeS.jpg",
"jaeT.jpg", "jaeU.jpg", "jaeV.jpg", "jaeW.jpg"];

// 랜덤으로 이미지 가져오기
const choseImage = images[Math.floor(Math.random() * images.length)];

// html에 추가할 element 생성하기
const baImage = document.createElement("img");
baImage.src = `img/${choseImage}`;

// element HTML에 추가하기
document.body.prepend(baImage);
