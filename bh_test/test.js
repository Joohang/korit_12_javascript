// let price1 = 10000;
// let qty1 = 2;
// let price2 = 5000;
// let qty2 = 1;

// let total = 0;

// // 1. 상품1 금액 계산
// total1 = price1 * qty1; 
// console.log(total1);

// // 2. 상품2 금액 계산
// total2 = price2 * qty2; 
// console.log(total2);

// // 3. 결과 출력
// total = total1 +total2;
// console.log("총 금액: " + total + "원"); 



// const king = {

//     name: '이성계',

//     tombName: '태조',

//     birth: '1335-11-04',

//     death: '1408-06-27'

// };



// const { birth, name, tomb, death } = king;

// console.log(king);

const users = [

  { id: 1, name: "이성계" },

  { id: 2, name: "이방과" },

  { id: 3, name: "이방원" }

];



const userMap = users.map((user) => {

  return user.id = user.id * 2;
  
});

console.log(userMap);     // 예상 결과: [2, 4, 6]


console.log(users);

