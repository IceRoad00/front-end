/*
    매개변수 기본값 : 
    - 함수 호출 시 인수를 전달하지 앉았으면 사용할 기본값을 지정할 수 있음
*/
const add = (a, b) => {return a + b};
console.log(add());
console.log(add(30, 90));


console.log('========================================');

/*
    rest 매개변수 : 
    - 매개변수 앞에 ...을 붙여서 정의한 매개변수
    - 함수에 전달받은 인수의 목록을 리스트로 전달 받음
    - rest 매개변수는 반드시 제일 마지막에 선언되어야 함
*/
const restFunction1 = (...args) => {
    console.log(args);
};
restFunction1(1, 2, 3, 4, 5);

const restFunction2 = (arg1, ...args) => {
    console.log(arg1);
    console.log(args);
};
restFunction2(1, 2, 3, 4, 5);

console.log('========================================');

/*
    spread 연산자 : 
    - ...을 사용하여 대상을 개별 요소로 분리
    - 반드시 피연산자는 반복 가능한 객체 (배열, 객체, 문자열 등...) 이어야 함 
*/
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

console.log(...numbers);
console.log(1, 2, 3, 4, 5);

// 배열 복사에 사용
const copyNumbers = [...numbers];
console.log(copyNumbers);

copyNumbers[0] = 10;
console.log(numbers);
console.log(copyNumbers);

// 배열 연결에 사용
const numbers2 = [6, 7, 8, 9, 10];
let newNumbers = [...numbers, ...numbers2];
console.log(newNumbers);

console.log('========================================');

// 배열 요소 추가에 사용
newNumbers = [...numbers, 0, -1, -2];
console.log(newNumbers);

console.log('========================================');

// 객체 복사, 연결, 요소 추가에 사용
const king = {
    name: '이성계',
    tombName: '태조'
};

let newKing = {...king};
newKing.name = '이방과';
console.log(newKing);
console.log(king);

const kingInfo = {
    address: '서울특별시',
    contury: '고려'
};

newKing = {...king, ...kingInfo};
console.log(newKing);

newKing = {...king, birth: '1335.11.04'};
console.log(newKing);

newKing = {...king, name: '이단', birth: '1335.11.04'};
console.log(newKing);