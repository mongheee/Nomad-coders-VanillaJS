/* HTML ul id="todo-list"
     ul의 li를 js로 추가하고
     li의 value로 추가할 것이다.

    todoform에서 작성한 text를 submit했을 때 form을 todolist가 생성되고 보여진다. 
    ->handleToDoSubmit , paintToDo function
    todolist를 작성하고 저장할 것이다. 저장된 todolist데이터를 가지고 올 것이다. 
    -> saveToDo function
    새로고침하여도 localStorage에저장된 todolist가 보여진다.
    -> savedToDos , parsedToDos.forEach(paintToDo)
    새로고침하고 todolist를 작성하였을 때 이전이 저장데이터 보존하고 데이터를 추가하는 방법
    -> 

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


    forEach : array의 각 item들에게 하나의 function을 실행하게 할 수 있다.
              처리가 되고 있는 item이 무엇인지 알 수도 있다. 
              function의 argument(item)로 제공된다. 
  

    데이터를 새로고침하고 todolist에 데이터를 입력하여 저장할 때 새로 저장이 된다.
    why? 새로고침은 apllication이 새로 시작되는 것이고, 
        새로 시작하면 toDos가 비어있는 array로 할당되고 newToDo를 작성하면 form은 submit할 때마다 
        전의 toDo들을 갖고 있지 않은 비어있는 toDos에 push하기 때문이다.
        그리고 saveToDo()할 때 새로운 toDos를 JSON.stringify(toDos)하여 setItem하기 때문이다.
    So,  apllication을 재 실행하였을 때 localStorage에 저장된 데이터가 있다면 
        같은 변수의 비어있는 array를 재할당으로 데이터에 덮어쓰지 않고
        이전 데이터를 복원하여 손상없이 추가로 넣어주자 
          -> toDos = parsedToDos;

    delete를 했지만 localStorage에 저장되어 있기 때문에 새로고침을 하면 저장되어 있는 이전 데이터가 다시 나타난다.
    toDos를 컨트롤하기 위해서는 text형식이 아닌 object형식으로 바꿔줘야 한다.
    So, toDo 데이터를 생성해서 저장할 때 id와 text를 갖고 있는 object를 만들어서 저장해 주자
        id를 랜덤하게 만드는 함수로 date.now()를 사용한다.
          date.now() : 밀리S을 가지고 오는 함수
    And, filter() : array에서 뭔가를 삭제하고 싶을 때 지우고 싶은 item을 빼고 새 array를 만든다.
                    item을 지우는 것이 아니라 , 제외하는 것이다. (exclude the item)
    
    finish, id와 text를 갖은 object형식으로 localStorage에 저장한다.
            id를 가져와서 html id에 넣어준다.
            text를 가져와서 html innertext에 넣어준다.
            delete함수에서 타겟팅된 li의 innertext마다 부여된 id를 찾아서 delet해준다.

    



*/

    

const toDoForm = document.getElementById("todo");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];
      /* toDos는 update되는 데이터를 담아야 하기 때문에 let으로 선언해준다. */

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDo();
}

function paintToDo(newToDoObject) {
  const li = document.createElement("li");
  li.id = newToDoObject.id;
  const span = document.createElement("span");
  span.innerText = newToDoObject.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);

}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value;
  // submit 후에 text가 비워지기 위해
  toDoInput.value = "";
  const newToDoObject = {
    id : Date.now(),
    text : newToDo,
  };
  toDos.push(newToDoObject);
  paintToDo(newToDoObject);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
// array에 있는 각각의 item에 따라 어떤 무언가를 적용시켜주고 싶을 수 있다.
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
               /* 여기서 각 item은 paintToDo()에 있다.
               js는 텍스트를 newToDo로 해서 painToDo에 전달해주기 때문에 
               newToDo들은 parsedToDos인 array에 있는 각 item이다. */

 /* 빈 array로 재 할당되는 변수에 function들이 실행되기 전에 이전 데이터를 넣어주고 시작하자!
        handleToDoSubmit에서 toDos.push()하기 이전에 toDos에 이전 데이터를 미리 담아주고 submit을 기다리자  */
}