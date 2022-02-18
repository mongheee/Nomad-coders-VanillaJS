/* HTML ul id="todo-list"
     ul의 li를 js로 추가하고
     li의 value로 추가할 것이다.

    todoform에서 작성한 text를 submit했을 때 form을 todolist가 생성되고 보여진다. 
    ->handleToDoSubmit , paintToDo function
    todolist를 작성하고 저장할 것이다. 저장된 todolist데이터를 가지고 올 것이다. 
    -> saveToDo function

    li안에는 list와 삭제 버튼이 있다
        list의 내용과 삭제 버튼 생성
        button은 click이벤트를 기다리고 있어야 한다.
            button에게 삭제 기능을 넣어준다 
            -> deleteToDo function
            function은 실행할 때 function event를 제공한다.
            event안의 target property : 어떤 것이 target인지
            target안의 parentElement : target의 부모가 누구인지
    
    saveToDo funstion
    : localStorage에 list를 array형태로 저장하고싶다
    BUT localStroage에는 array형태로 저장이 불가능하고, 오직 text만 저장할 수 있다.
    SO, JSON.stringify() : 브라우저가 가지고 있는 기능으로 JavaScript or array or anything changed String
        JSON.parse() : array 형태로 보이는 JavaScript Object로 만든다
            ex) JSON.stringify([1,2,3,4]) -> "[1,2,3,4]"
            ex) JSON.parse("[1,2,3,4]") -> [1,2,3,4] 
    finish, lacalStroage에는 텍스트 형태가 아닌 형태는 저장이 불가능하다.
            그래서 array형태의 데이터를 가지고 싶다면 
            먼저 localStorage에 JSON.stringify()로 array형태의 string으로 데이터를 저장하고
            JSON.parse()로 string을 살아있는 array로 변환하는 것!
    
            */

const toDoForm = document.getElementById("todo");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const toDo = toDoInput.value;
  // submit 후에 text가 비워지기 위해
  toDoInput.value = "";
  toDos.push(toDo);
  paintToDo(toDo);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function fc() {}
const savedToDos = localStorage.getItem(TODOS_KEY);
// array에 있는 각각의 item에 따라 어떤 무언가를 적용시켜주고 싶을 수 있다.
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(fc);
  /* forEach : array의 각 item들에게 하나의 function을 실행하게 할 수 있다.
                       처리가 되고 있는 item이 무엇인지 알 수도 있다. 
                       function의 argument(item)로 제공된다.  */
}
