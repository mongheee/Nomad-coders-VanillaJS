
/* 매 2초마다 sayHello()를 실행하고 싶다 */

function sayHello() {
    console.log("Hello :)");
}

setInterval(sayHello, 5000);

// JavaScript에 interval 기능을 제공하는 tool이 있다 : setInterval()
// setInterval() -> 두가지의 argument를 받는다.
// argument1 : 실행하고자 하는 function
// argument2 : 호출되는 function 간격을 몇 ms(milliseconds)로 할지

setTimeout(sayHello, 5000);
// 일정 시간 흐른 뒤 딱 한번 sayHello()를 실행하고 싶다
// JavaScript에서 제공하는 tool이 있다 : setTimeout()
// setTimeout() -> 두가지의 argument를 받는다.
// argument1 : 실행하고자 하는 function
// argument2 : 호출되는 function을 기다리는 시간을 몇 ms(milliseconds)로 할지

/* Date Object
: 날짜는 보여주는 JavaScript tool
 */
    const date = new Date() 
    // : 오늘 날짜를 가지고 온다.
    // Date object의 property를 이용하여 정보에 접근할 수 있다.
    date.getHour(), date.getMinutes(), date.getseconds() 
    
    date.getTime()
    //: millisecond로 날짜 date를 가지고옴

    padStart() 
    // 숫자를 가지고와서 보여줄 때 string의 개수가 하나일 때 두개로 맞춰 01,02,..  식으로 보이게 하는 함수
    //: String에 쓸 수 있는 function
    // -> "1".padStart(2,"0") : String의 길이가 2가 아니라면 앞에 0을 붙여주라
    // similler) padEnd( , "")


/* random으로 array 데이터를 가지고 올 때
    1.array에 접근해서 random으로 인덱스를 줘야한다.
    2. 인덱스를 random으로 주는 function을 만든다
        Math module을 사용해야한다.
 */
//  Math module
    Math.random() 
    // : 0~1사의 값을 random으로 도출하는 function
    // 함수의 범위에 1이 포함되지 않는다.
    Math.round() 
    // : 반올림을 해서 값을 도출하는 function
    Math.ceil() 
    // : 높은 값으로 도출하는 function 
    // ex) 1.1 == 2, 1.01 == 2, 1.0 == 1
    Math.floor() 
    // : 낮은 값으로 도출하는 function
    // ex) 1.8 == 1, 1.09999 == 1, 2.0 == 2 

/* JavaScript에서 element를 생성해서 생성한 HTML을 추가하기
    1. js에서 element를 만든다
    2. body에 html을 추가한다.
 */
-- createElement() 
    // : element 생성하는 내장 function
    // ex) createImage = document.createElement("img");
    //     createImage.src = "img/image.jpg";

-- appendChild(), prepend() 
    // : html을 추가하는 내장 function
    // prpend는 body의 첫번째 자식으로 appendChild는 body의 마지막 자식으로 추가됨 
    // ex) document.body.appendChile(createImage);

/* arrow function 화살표 함수
     function name(item) {
        console.log("It is", item)     => It is item
     };                   
     parsedToDos.forEach(name);
    ===
     parsedToDos.forEach((item) => console.log("It is", item));

    -------------------------------------------------------------------------
     function name(item) {
             console.log("It is", item)     => It is item
         };
     ===
     (item) => console.log("It is", item)
*/

/* filter()
    ----------------------------------------------------------------------------
    en = [a,b,c]
    function call(){
        return  ;
    }
    en.filter(call)

    -> fileter는 call function에 en array안에 들어있는 item들은 하나씩 불러와서 function을 실행한다.
       filter에 쓰이는 function은 반드시 return을 해줘야한다.
       return에서 false인 item을 제외한 true인 item만 추출하여 새 array를 만든다.

*/

/* weather.js
    geolocation은 user의 좌표를 준다. 
    WIFI, GPS, 위치 등의 user의 정보를 알 수 있다.

    weather을 보여주는 api를 사용!
    경도와 위도를 구하여 api키값과 함께 url을 가지고 온다
    fetch(url); 을 통해서 
        fetch : promise이다. 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것이다.
            실제로 url에 접속할 필요 없이 JavaScript가 대신 url을 불러와서 브라우저에 정보를 준다.
            개발자 network에 request정보 가져와짐
        then : 
            response로 받아준다.
*/
    navigator.geolocation.getCurrentPosition()
    /* getCurrentPosition()은 두가지의 argument를 받는다.
         - successCallback : 성공했을 때 실행될 함수
            success function은 user의 위치를 GeolocationPosition object 로 준다.
            coords.tlatitude : 위도, coords.longitude : 경도 
         - errorCallback : 실패했을 때 실행될 함수
    -----------------------------------------------------------------------------------
    function seccess(){
        //user의 좌표를 받는데 성공한다면 제공 받을 정보 사용 로직
    }
    function error(){
        //user의 좌표를 받는데 실패했다면 user에게 제공할 로직
    }

    
    */
