/*  
element에 접근하기
날짜를 보여주기 위해 날짜, 시, 분 가져오기
시간은 '매번'의 기준에 따라 보여줘야하기 때문에 setInterval() function 사용하기
시계는 매번 내용이 바뀌기 때문에 실행될 함수 만들어 주기 : setInterval()에 사용할 시계함수

 */

const clock = document.getElementById("clock");

// 시계함수
function setClock() {
  //날짜
  const date = new Date();
  // 시
  const hour = String(date.getHours()).padStart(2, "0");
  // 분
  const minute = String(date.getMinutes()).padStart(2, "0");
  // 초
  const second = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hour}:${minute}:${second}`;
}

// 브라우저 실행 시 바로 화면에 나타내기 위해 js function 바로실행하기 : ()
setClock();
// 매번의 기능을 가지고 있는 함수 내장함수 setInterval() : millisecond기준 1s === l000ms
setInterval(setClock, 1000);
