// input 과 button element 가져오기
// btn click function을 js가 대신해주게 하기
// button submit하고 난 후  input으로 받은 데이터 저장하기
// btn submit하고 난 뒤 새로고침 되지 않고 받은 데이터
// preventDefault()로 기본동작을 막고(새로고침)
// form을

const loginForm = document.getElementById("login-form");
const logInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = logInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  printGreetings(userName);
}

function printGreetings(userName) {
  greeting.innerText = `Hello, ${userName} :)`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 유저 정보가 있을 경우에는 greeting을 보여주고 없을 경우에는 loginForm을 보여준다.
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  printGreetings(savedUsername);
}
