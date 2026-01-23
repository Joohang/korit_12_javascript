//1. toString() 생략
//2. join()
let names = ['김영','김일','김이'];
console.log(names.join(' / '));
// 3. pop()
let scores = [100, 90, 80];
let lastScore = scores.pop()
console.log(scores);    // 결과값 : [100, 90]
console.log(lastScore); // 결과값 : 80
//4 . push()
scores.push(70);
console.log(scores);
//5. shift()
let firstScore = scores.shift();  // 첫 번째 element를 삭제하고 그 값을 return
console.log(scores);
console.log(firstScore);
//6. unshift()
let newIndex = scores.unshift(4.5);  //0번지에 새 element 추가하고 +1된 새로운 length를 return
console.log(scores);
console.log(newIndex);
//7. 배열 요소 변경
scores[2] =' A+' ;
console.log(scores);
//8. splice()
scores.splice(1,0,'B+', '100점', 4.0); // 1번지에 아무것도 삭제하지 않고 (0), 'B+' , '100점', '4.0'이라는 3개의 element를 score배열에 추가한다는 의미
console.log(scores); //결과값
//9. concat()
let vege = ['토마토', '수박', '샐러리'];
let meats = ['닭고기', '소고기', '양고기'];
let fruits = ['사과', '딸기', '망고'];
let newFoods = vege.concat(meats,fruits);
console.log(newFoods);

//12. filter()
let words = [ 'spray', 'limit','elite','extraordinary', 'destruction','present'];
let result = words.filter(function(word) {
  return word.length > 6;
})
console.log(result);

/*
  이번 예시는 배열 내에 객체가 있는데, 걔의 point가 80점 초과인 애들만 모아서 가져옴
*/
let persons = [
  {
    name: '김영',
    point: 78,
    city: '서울',
  },{
    name: '김일',
    point: 98,
    city: '서울',
  },{
    name: '김이',
    point: 76,
    city: '제주',
  },{
    name: '김삼',
    point: 81,
    city: '부산',
  },
]
let personResult = persons.filter(function(person){
  
  return person.point > 80;
}) 
console.log(personResult);
/*
[
  { name: '김일', point: 98, city: '서울' },
  { name: '김삼', point: 81, city: '부산' }
]
*/

//13. map()
let userList = [
  {
    fName:'영',
    lName:'김',
    email:'a@test.com'
  },
  {
    fName:'일',
    lName:'김',
    email:'c@test.com'
  },
  {
    fName:'이',
    lName:'김',
    email:'d@test.com'
  },
  {
    fName:'삼',
    lName:'김',
    email:'e@test.com'
  },
  {
    fName:'사',
    lName:'김',
    email:'f@test.com'
  },
];

let modifiedUserList = userList.map(function(user){
  return {
    fullname: user.lName + user.fName,
    lName: user.lName,
    fName: user.fName,
    email: user.email,
  };
})

console.log(modifiedUserList);
console.log(userList);
/**
 * [
  { fullname: '김영', lName: '김', fName: '영', email: 'a@test.com' },
  { fullname: '김일', lName: '김', fName: '일', email: 'c@test.com' },
  { fullname: '김이', lName: '김', fName: '이', email: 'd@test.com' },
  { fullname: '김삼', lName: '김', fName: '삼', email: 'e@test.com' },
  { fullname: '김사', lName: '김', fName: '사', email: 'f@test.com' }
]
 */