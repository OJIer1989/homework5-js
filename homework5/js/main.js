function UserClient(name,age) {
  this.name = name;
  this.age = age;
  return `Пользователь ${this.name} имеет  ${this.age} лет`
  
}

const UserTom = new UserClient('Tom',22);
const UserKoss = new UserClient('Koss', 13);
const NewClient = new UserClient(prompt('Введите ваше имя '), prompt('Введите ваш ваш возраст'))


UserClient.prototype.getInfo2 = function() {
  return   `Пользователь ${this.name} имеет  ${this.age} лет! проверка прототипа `
}

console.log(UserTom);
console.log(UserKoss);
console.log(NewClient);

const UserArr = [UserTom, UserKoss, NewClient];
console.log(UserArr);


const UserArrPlus =  Array.from(UserArr)

function SortPlus(arr) {
  arr.sort((a,b) => b.age>a.age ? 1:-1);
}
SortPlus(UserArrPlus);
console.log(UserArrPlus);

const UserArrMinus = Array.from(UserArr)


function SortMinus(arr) {
  arr.sort((a, b) => b.age < a.age ? 1 : -1);
}
SortMinus(UserArrMinus);
console.log(UserArrMinus);




function ConstructorFigure(sideA,sideB) {
  this.sideA = sideA;
  this.sideB = sideB;
  // console.log(`площать фигуры равна = ${this.sideA * this.sideB} см, так же Диагональ фигуры равна = ${Math.sqrt(Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2))} , а так же периметр фигуры = ${(this.sideA * 2) + (this.sideB * 2) } `);
 return
}




ConstructorFigure.prototype.figures = function () {
  return  `площать фигуры равна = ${this.sideA * this.sideB} см, так же Диагональ фигуры равна = ${Math.sqrt(Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2)) } , а так же периметр фигуры = ${(this.sideA * 2) + (this.sideB * 2) } `;

}

const Rectangle = new ConstructorFigure(4,5)
const Squar = new ConstructorFigure(4,6)
const NewSquar = new ConstructorFigure(prompt(`Введите число А`,4), prompt(`Введите число B`,5));
console.log(NewSquar);



const UserName = prompt('Введите ваше имя');
function SortName() {
  if(UserName.length < 4) {
    console.log(`${UserName.slice(0, 1) } ... ${UserName.slice(2, 3) }`);
    
  }
  else if(UserName.length > 3) {
    console.log(`${UserName.slice(0, 3)}...`);
  }

}
SortName(UserName)



  
