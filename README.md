1. css

```
box-sizing: border-box;
object-fit: cover / contain / fill;
background: linear-gradient(to bottom, #f9f9f9, #f1f1f1);

display: grid;
grid-templates-columns: 1fr 1fr;
gap: 10px 20px (행별 10px 열별 20xp 떨어뜨려줌)

nth-of-type 선택자
ex)
  ul {
    width: 1200px;
    display: grid;
    grid-templates-columns: 1fr 1fr;
    gap: 10px 20px;
  }

  li:nth-of-type(3) {   // li 요소 grid 중 3 번째 요소를
    grid-column: 1 / span 2;  // 2개의 열을 차지하게 해줌
  }



// 안내 문구 0.5s 후 뜨기
.menu-left .btn.load::before {
  content: "파일 업로드";
  position: absolute;
  top: 37px;
  left: 7px;
  width: 85px;
  background-color: #ffffff;
  color: #333;
  padding: 7px;
  border: 1px solid #cccccc;
  border-radius: 4px;

  z-index: -1; // 이거 안해주면 hover 시에 뜨는 애만 hover 해도 뜸
  opacity: 0;
}

.menu-left .btn.load:hover::before {
  z-index: 2;
  opacity: 1;
  transition-delay: 0.5s;
}
```

2. html

```
<section></section>
```

3. 클린코드

```
대원칙! 시간이 지나서 내 코드를 봤을 때 이해할 수 있는 코드를 만들자

DRY 법칙
  - Don't Repeat Yourself.
KISS법칙
  - Keep It Simple, Stupid.

(1)함수
  - 함수명은 동사를 활용해라
  - 하나의 함수는 한가지 액션만 수행해라
  - argument는 3개 그 이하로만 ( 많다면 configuration object 변수로 넘기는게 좋음 )
  - boolean 값을 인수로 넘기지 말자 (if ,else 로 함수를 작동시키지말고 함수를 하나 더 만들어라 하나의 함수는 하나의 액션만!)

(2)변수
  - 변수명을 축약하지 말고 변수명을 명확하게 짓자.

(3)주석
  - 함수명으로 충분치 않을 때 주석을 신경써서 남기자.

(주의) 처음부터 클린코드를 작성하려하지말고 일단 코딩 후 리팩토링을 하자!
```

4. JS

```
(1) for 문
const Arrays = [1,2,3]
for (const array of Arrays) {
  console.log(array);
}

(2) 얕은복사, 깊은복사
그동안 스프레드 연산자(...) 깊은 복사인줄 알았는데 아니었음.. 🥲
껍데기는 깊은 복사가 되는데 2 depth 이상의 값은 얕은복사가 이뤄지니 주의하자:D

=> 깊은 복사 하는 방법

A. 제일 쉬운 JSON 
JSON.parse(JSON.stringify(object));
단점은 다른 방법에 비해 느리고 객체가 function일 경우 undefined로 처리됨.
또, 날짜 객체나 정규 표현식 등의 복잡한 객체는 제대로 복사하지 못함.


B. 재귀 함수를 구현한 복사
function deepCopy(obj) {
  if (obj === null || typeof !== "object") {
    return obj;
  }

  if (obj instanceof Array) {
    const copyArray = [];
    for (let i = 0; i < obj.length; i++) {
      copyArray[i] = deepCopy(obj[i]);
    }
    return copyArray;
  }

  if (obj instanceof Object) {
    const copyObject = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copyObject[key] = deepCopy(obj[key]);
      }
    }
    return copyObject;
  }
}

const deepCopyArray = deepCopy(originalArray);
const deepCopyObject = deepCopy(originalObject);
 
단점은 어려움 그래도 custom 함수 만들어서 따로 빼놓고 사용하면 될듯! 

C. Lodash 라이브러리 (라이브러리 최고..)
const deepCopy = require("lodash.clonedeep"
const copy = deepCopy(object); // 역시 최고..b

```
