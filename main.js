//1
const fruits = ['apple', 'banana', 'orange'];
fruits.forEach(fruit => {
  console.log(fruit);
});

//2
const numbers = [2, 4, 6, 8];
numbers.forEach(number => {
  console.log(number *2);
});

//3
const names = ['Amina', 'Dana', 'Aruzhan'];
names.forEach(name => {
  console.log(`Привет, ${name}!`);
});

//4
const colors = ['red', 'green', 'blue'];
colors.forEach((color, index) => {
  console.log(color, index);
});

//5
const numbers1 = [10, 20, 30, 40, 50];
numbers1.forEach((number, index) => {
  if (index < 3) {
    console.log(number);
  }});

//6
const ages = [15, 18, 20, 16, 30];
ages.forEach(age => {
if (age >= 18) {
  console.log('Совершеннолетний');
} else {
  console.log('Несовершеннолетний');
}});

//7, 8
const products = [
  { name: 'Laptop', price: 500000 },
  { name: 'Phone', price: 300000 },
  { name: 'Mouse', price: 15000 }
];
products.forEach(product => {
  console.log(`${product.name} - ${product.price}`);
});
products.forEach(product => {
if(product.price > 100000) {
  console.log(product.name);
}});

//9
for(let i = 0; i <= 4; i++) {
  console.log(i);
};

//10
for(let i = 1; i <= 5; i++) {
  console.log(i);
};

//11
for(let i = 0; i <= 10; i += 2) {
  console.log(i);
};

//12
for(let i = 5; i >= 0; i--) {
  console.log(i);
};

//13
const fruits1 = ['apple', 'banana', 'orange'];
for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
};

//14
const colors1 = ['red', 'green', 'blue'];
for(let i = 0; i < colors1.length; i++) {
  console.log(colors1[i], i);
};

//15
const numbers2 = [10, 20, 30, 40];
let total = 0;
for(let i = 0; i < numbers2.length; i++) {
  total += numbers2[i];
}
console.log(total);

//16
const numbers3 = [3, 15, 7, 20, 25, 2];
let num = 0;
for(let i = 0; i < numbers3.length; i++) {
  if(numbers3[i] > 10) {
    num++;
  }
}
console.log(num);

//17
const products1 = [
  {name: 'Phone', isAvailable: true},
  {name: 'Laptop', isAvailable: false},
  {name: 'Mouse', isAvailable: true}
];
for(let i = 0; i < products1.length; i++) {
  if(products1[i].isAvailable) {
    console.log(products1[i].name);
  };
};

//18
const cards1 = document.querySelectorAll('.card');
for(let i = 0; i < cards1.length; i++) {
  cards1[i].classList.add('active');
};

//19
//а - forEach потому что он предназначен для перебора каждого элементов массива
//б - for потому что его можно использовать для перебора элементов массива выборочно
//в - for
//г - forEach
//д - for

//20
const numbers4 = [1, 2, 3];
for(let i = 0; i < numbers4.length; i++) {
  console.log(numbers4[i]);
};

//21
const fruits2 = ['apple', 'banana', 'orange'];
fruits2.forEach((fruit) => {
  console.log(fruit);
});

//22
//0, 1, 2

//23
let i = 1;
while(i <= 5) {
  console.log(i);
  i++;
};

//24
let a = 5;
while(a >= 1) {
  console.log(a);
  a--;
};

//25
let count = 0;
while(count < 5) {
  console.log(count);
  count++;
};

//26
/*for - нам известно количество итераций
while - нам неизвестно количество итераций, и мы продолжаем выполнять цикл до тех пор, пока условие истинно
пароль, загадки, лента*/

//27
//ошибка. сначала нужно объявить переменную, а потом условие

//28
//правда. потому что астана правда город, мы не дали других условий

//29
//10. новая переменная внутри скобок и жава не станет ее выводить

//30
//задание 29 и 30 идентичны

//31
//ошибка

//32
/*внутреняя переменная будет работать только внутри скобок
снаружная переменная будет работать везде, где она объявлена*/

//33
//outside

//34
const numb = [1, 2, 3, 4];
const newNumb = numb.map(num => num * 2);
console.log(newNumb);

//35
const users = [
  { name: 'Amina', age: 20 },
  { name: 'Dana', age: 25 },
  { name: 'Aruzhan', age: 19 }
];
const userNames = users.map(user => user.name);
console.log(userNames);

//36
const products2 = [
  { name: 'Phone', price: 300000 },
  { name: 'Laptop', price: 500000 }
];
const productList = products2.map(product => `${product.name} - ${product.price}`);
console.log(productList);

//37
const numb1 = [5, 10, 15];
const newNumb1 = numb1.map(num => num * 10);
console.log(newNumb1);

//38
//из-за фигурных скобок, если их убрать, то будет работать

//39
const numbers5 = [5,10, 15, 20, 3];
const numbF = numbers5.filter(num => num > 10);
console.log(numbF);

//40
const users1 = [
  {name: 'Amina', age: 17},
  {name: 'Dana', age: 25},
  {name: 'Ali', age: 16},
  {name: 'Aruzhan', age: 19}
];
const adults = users1.filter(user => user.age >= 18);
console.log(adults);

//41
const products3 = [
  {name: 'Phone', isAvailable: true},
  {name: 'Laptop', isAvailable: false},
  {name: 'Mouse', isAvailable: true}
];
const expensiveProducts = products3.filter(product => product.isAvailable);
console.log(expensiveProducts);

//42
const products4 = [
  {name: 'Phone', price: 300000},
  {name: 'Laptop', price: 500000},
  {name: 'Mouse', price: 15000}
];
const expensiveProducts1 = products4.filter(product => product.price > 100000);
console.log(expensiveProducts1);

//43
//условие задачи есть, самой задачи нет

//44
const numbers6 = [5, 10, 15, 20, 25];
const sum = numbers6
.filter(num => num > 10)
.map(num => num * 2)
console.log(sum);

//45
const prod = [
  {name: 'Phone', isAvailable: true},
  {name: 'Laptop', isAvailable: false},
  {name: 'Mouse', isAvailable: true}
];
const productNames = prod
.filter(product => product.isAvailable)
.map(product => product.name);
console.log(productNames);

//46
const users2 = [
  {name: 'Amina', age: 17},
  {name: 'Dana', age: 25},
  {name: 'Ali', age: 16},
  {name: 'Aruzhan', age: 20}
];
const adultNames = users2
.filter(user => user.age >= 18)
.map(user => user.name);
console.log(adultNames);

//47
const numbers7 = [1, 2, 3];
numbers7.forEach((number) => {
  console.log(number);
});

//48
const numbers8 = [1, 2, 3];
const result = numbers8.map((number) => {
  return number * 2;
});
console.log(result);

//49
//Ошибка, потому что консоль за скобками

//50
//undefined, нет индекса под 3 номером. там до 2

//51
//будет бесконечно работать цикл

//52
const products5 = [
  {name: 'Phone', isAvailable: true},
  {name: 'Laptop', isAvailable: false}
];
const result1 = products5.filter(product => product.isAvailable);
console.log(result1);

//53
const products8 = [
  {name: 'Phone', price: 300000, isAvailable: true},
  {name: 'Laptop', price: 500000, isAvailable: false},
  {name: 'Mouse', price: 15000, isAvailable: true},
  {name: 'Tablet', price: 200000, isAvailable: true}
];
//a
products8.forEach(product => {
    console.log(product.name);
  }
);

//б
for(let i = 0; i < products8.length; i++) {
  console.log(`${i} - ${products8[i].name}`);
};

//в
products8
.filter(product => product.isAvailable)
.forEach(product => {
  console.log(product);
});

//г
products8
.filter(product => product.price > 100000)
.forEach(product => {
  console.log(`${product.name} - ${product.price}`);
});

//д
products8
.map(product => product.name)
.forEach(name => console.log(name));

//е
products8
.filter(product => product.isAvailable)
.forEach(product => {
  console.log(product);
});
products8
.map(product => product.name)
.forEach(name => console.log(name));

//ж
/*forEach - просто перебирает каждый элемент
map - меняет каждый элемент
filter - фильтрует каждый элемент