
//1
function sayHello() {
  console.log('Hello!')
};
sayHello();

//2
function greet(name) {
  console.log(`Привет ${name}`);
};
greet("Amina"),
  greet("Dana"),
  greet("Ali")

//3
function sum(a, b) {
  return a + b;
}
let result = sum(10, 5);
console.log(result);

//4
function multiply(a, b) {
  return a * b;
}
let result1 = multiply(5, 5);
console.log(result1);

//5
function formatPrice(price) {
  return `${price} тг.`;
}
console.log(formatPrice(300000));

//6
function checkAge(age) {
  return age >= 18 ? 'Доступ разрешен' : 'Доступ запрещен';
};

//7
function greet(name = 'Гость') {
  console.log(`Привет, ${name}`)
}
greet('Sam')
greet()

//8
//name - аргумент
//Sam - параметр

function products(list) {
  console.log(`Список ${list}`);
}
products()
products(['cucumber', 'tomato', 'pepper'])

//9
const showMessage = function () {
  console.log('Hello');
};
showMessage();

//10
const showMessage1 = () => console.log('Hello');

//11
const double = (number) => number * 2;

//12
//Hello в функциях можно сначала в начале кода вызвать, а
//потом объявить

//13
//ошибка. здесь уже нельзя без объявления

//14
function sum(a, b) {
  console.log(a + b);
};
sum(60, 40);

const sum1 = function (a, b) {
  console.log(a + b);
};
sum1(20, 5);

const sum2 = (a, b) => {
  console.log(a + b);
};
sum2(1, 98);

//15
//первая консоль 5
//вторая undefined потому что нет результата

//16
function sum3(a, b) {
  return a + b;
}
const result2 = sum(2, 3);

//17
//outside. внутри фигурных скобок не видно никому, кроме
//разработчика

//18
//консоль нужно внутри скобок вызывать

//19
function createUser() {
  const user = {
    name: 'Amina',
    age: 20,
  };
  return user;
};
const myNewUser = createUser();
console.log(myNewUser)

//20
//со скобками функция вызывается немедленно, а со скобками
//можно вызвать, когда надо нам

//21
//в последней строке лишняя круглая скобка
//ее нужно в функции или консоль

//22
const products1 = [
  { name: 'Phone', price: 300000 },
  { name: 'Laptop', price: 500000 },
  { name: 'Mouse', price: 15000 }
];
function showProductName(product) {
  console.log(product)
}
products1.forEach(showProductName)


//23
const products2 = [
  { name: 'Phone', price: 300000 },
  { name: 'Laptop', price: 500000 },
  { name: 'Mouse', price: 15000 }
];
function getProductName(product) {
  return product.name
}
const productNames = products2.map(getProductName)
console.log(productNames)

//24
const products3 = [
  { name: 'Phone', price: 300000 },
  { name: 'Laptop', price: 500000 },
  { name: 'Mouse', price: 15000 }
];
function isExpensiv(product) {
  return product.price > 100000;
}
const resultName = products3.filter(isExpensiv)
console.log(resultName)

//25
const prices = [1000, 2000, 5000];
const newPrices = prices.map(price => price + (price * 0.1));
console.log(newPrices)

//26
const users = [
  { name: 'Amina', age: 17 },
  { name: 'Dana', age: 25 },
  { name: 'Ali', age: 16 },
  { name: 'Aruzhan', age: 20 }
];
const adult = users.filter(user => user.age >= 18)
console.log(adult)

//27
const products4 = [
  { name: 'Phone', price: 300000, isAvailable: true },
  { name: 'Laptop', price: 500000, isAvailable: false },
  { name: 'Mouse', price: 15000, isAvailable: true }
];
const isAvailable = products4
  .filter(product => product.isAvailable)
  .map(product => product.name)
console.log(isAvailable);

//28
//нужен filter, а не map

//29
//убрать фигурные скобки

//30
/*const products4 = [
{ name: 'Phone', price: 300000, isAvailable: true },
{ name: 'Laptop', price: 500000, isAvailable: false },
{ name: 'Mouse', price: 15000, isAvailable: true }
];
const isAvailable = products4
.filter(product => product.isAvailable)
.map(product => product.name)
console.log(isAvailable);

filter - перебрал нам массив и вернул только то, что в наличии.
Он может вернуть и меньшее кол. массивов, а map так не может.
Он должен вернуть ровно столько в массиве элементов, не больше, 
не меньше.*/

//31
//const button = document.querySelector('.show-button');
//button.addEventListener("click", () => {
//  console.log("Кнопка нажата");
//});

//32
const btn = document.querySelector('.show-button');
function showMessage2() {
  console.log("Кнопка нажата!");
}
btn.addEventListener('click', showMessage2);

//33
//1-ая, так как во 2–ой функция вызовится сразу, а не при 
//клике на кнопку

//34
const button1 = document.querySelector('.color-button');
button1.addEventListener('click', () => {
  button1.classList.toggle('active');
});

//35
const title = document.querySelector('.title');
title.addEventListener('mouseover', () => {
  console.log(title.textContent)
});

//36
const mouse = document.querySelector('.title');
mouse.addEventListener("mouseleave", () => {
  console.log('Курсор ушёл')
});

//37
const input = document.querySelector('.name-input');
input.addEventListener('input', () => {
  console.log(input.value)
});

//38
input.addEventListener('input', (event) => {
  console.log(event.target.value)
});

//39
/*событие. содержит всю информацию об этом клике*/

//40
const button2 = document.querySelector('.color-button');
button2.addEventListener('click', (event) => {
  console.log(event.target)
});

//41
const googleLink = document.querySelector('.google-link');
googleLink.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Переход отменён')
});

//42
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

//43
const emailInput = document.querySelector('.email-input');
  console.log(emailInput.value);
});

//44
/*отменяет действие браузера, но код продолжит дальше работать*/

//45
function showInputValue() {
const nameInput = document.querySelector('.name-input');
  console.log(nameInput);
  const btn1 = document.querySelector('.show-button');
btn1.addEventListener('click', showInputValue);
};

//46
function showInputValue() {
const nameInput = document.querySelector('.name-input');
  return nameInput.value;
}
const btn1 = document.querySelector('.show-button');
btn1.addEventListener('click', () => {
  const result = showInputValue();
    console.log(result)
});

//47
function isInputEmpty(event) {
  event.preventDefault();
  const nameInput = document.querySelector('.name-input');
  if (nameInput.value === '') {
    console.log('Введите имя');
  } else {
    console.log('Поле пустое');
  }
}
const btn2 = document.querySelector('.show-button');
btn2.addEventListener('click', isInputEmpty);

//48
function toggleButton(button) {
  button.classList.toggle('active')
}
const myButton = document.querySelector('.color-button');
myButton.addEventListener('click', function() {
  toggleButton(myButton);
});

//49
const cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
  card.addEventListener('click', function() {
    card.classList.add('selected');
    console.log('Клик', card.textContent);
  });
});

//50
const cards1 = document.querySelectorAll('.card');
cards.forEach(function(card) {
  card.addEventListener('click', function(event) {
    event.target.classList.add('selected');
    console.log('Кликнули по:', event.target.textContent);
  });
});

//51
const products5 = [
  { name: 'Phone', price: 300000, isAvailable: true},
  { name: 'Laptop', price: 500000, isAvailable: false },
  { name: 'Mouse', price: 15000, isAvailable: true },
  { name: 'Tablet', price: 200000, isAvailable: true }
];

products5
.filter(product => product.isAvailable)
.map(product => product.name)
.forEach(name => console.log(name));

//52
function getAvailableProductNames(products5) {
  return products5
  .filter(product => product.isAvailable === true)
  .map(product => product.name);
}

//53
function getExpensiveProducts(products, minPrice) {
  return products5.filter(product => product.price > minPrice);
}

//54
const getExpensiveButton = document.querySelector('.show-expensive-btn');
getExpensiveButton.addEventListener('click', () => {
  const products = getExpensiveProducts();
  console.log(products);
});

//55-56
const priceInput = document.querySelector('.price-input');
const filterBtn = document.querySelector('.filterBtn');
filterBtn.addEventListener('click', () => {
  const rawValue = priceInput.value.trim();
  if (rawValue === '') {
    console.error('Ошибка: Поле ввода цены не должно быть пустым!');
    return;
  }
  const minPrice = Number(rawValue);
  const filteredProducts = products5.filter(product => product.price > minPrice);
  console.log(`Товары дороже ${minPrice}:`, filteredProducts);
});

//57
//вызывание сразу функции на последней строке? Нужно убрать круглые скобки?

//58
//Нужно написать *2 внутри круглых скобок или вернуть значение через return

//59
//использовать фильтр, а не map

//60
//ошибка. переменная не объявлена

//61
//конст внутри фигурных скобок, а консоль снаружи

//62
const numbers = [1, 2, 3];
const doubled = numbers.map(number => number * 2);

//63
const products6 = [
  { name: "Ноутбук", price: 500000, isAvailable: true },
  { name: "Смартфон", price: 300000, isAvailable: true },
  { name: "Наушники", price: 70000, isAvailable: false },
  { name: "Монитор", price: 120000, isAvailable: true },
  { name: "Клавиатура", price: 4000, isAvailable: false }
];

const priceInput1 = document.querySelector('.price-input');
const showButton = document.querySelector('.show-expensive-btn');
function filterProducts(minPrice) {
  const filtered = products6.filter(product => product.isAvailable && product.price > minPrice);
  const names = filtered.map(product => product.name);
  return names;
}
function showButtonClick() {
  const rawValue = priceInput1.value.trim();
  if (rawValue === "") {
    console.log("Введите минимальную цену");
    return;
  }
  const minPrice = Number(rawValue);
  if (isNaN(minPrice)) {
    console.log("Пожалуйста, введите корректное число");
    return;
  }
  const resultNames = filterProducts(minPrice);
  console.log(resultNames);
}
showButton.addEventListener('click', showButtonClick);