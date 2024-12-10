//first task - დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს
function compare(m, n) {
  if (m > n) {
    return m;
  } else if (n > m) {
    return n;
  } else if (m==n){
    return 0;
  }
}

console.log(compare(8, 5));
console.log(compare(4, 10));
console.log(compare(3, 3));

//second task - დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
function sum(number1, number2) {
  let jami = number1 + number2;
  return jami;
}

let result = sum(4, 5);
console.log(result);

//third task - დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)
function myName() {
  console.log("Gvantsa Kintsurashvili");
}

myName();

//fourth task - დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)
function fullName(firstname, lastname) {
  return firstname + " " + lastname;
}
const Name = fullName("Gvantsa", "Kintsurashvili");
console.log(Name);

//fifth task -  დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)
function calculate(n) {
  let namravli = 1;
  for (let i = 1; i <= n; i++) {
    namravli = namravli * i;
  }
  return namravli;
}

console.log(calculate(4));

//Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - რომელსაც აქვს შემდეგი properties: firstName, lastName, age, scores (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) და მეთოდი fullName რომელიც აბრუნებს სტუდენტის სრულ სახელს ( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ )
//sixth task - დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)
const student = {
  firstName: "Gvantsa",
  lastName: "Kintsurashvili",
  age: 25,
  scores: [4, 7, 5, 3, 2],
  fullname: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(student.fullname());

//seventh task - დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს
function qulebisJami(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total = total + scores[i];
  }
  return total;
}

console.log(qulebisJami(student.scores));

//eighth task - დაბეჭდეთ სტუდენტის სახელი და ასაკი
console.log(student.firstName);
console.log(student.age);
