
imgs = [
  "./assets/1.jpg",
  "./assets/2.jpg",
  "./assets/3.jpg",
  "./assets/4.jpg",
  "./assets/5.jpg",
  "./assets/6.jpg",
  "./assets/7.jpg",
  "./assets/8.jpg",
  "./assets/9.jpg",
  "./assets/10.jpg",
];

imgsBack = [
  "./assets/night",
  "./assets/morning",
  "./assets/day",
]


// Код для отображения изображений с задержкой
let myIndex = 0;
let delay = prompt("Введите желаемую задержку в миллисекундах", 500);
setInterval(function () {
  document.getElementById("image").src = imgs[myIndex]; //поиск дока по id image -> возврат значаения атрибута срц
  myIndex++;
  if (myIndex >= imgs.length) {
    myIndex = 0;
  }
}, delay);


// Установка фона под дате

let now = new Date();
let CurrentTime = now.getHours();
console.log(CurrentTime);

var urlForDay = "https://www.zastavki.com/pictures/1920x1080/2014/Nature___Mountains____Summer_day_in_the_mountains_071254_23.jpg";
var urlForMornig = "https://wpapers.ru/wallpapers/nature/15822/1920x1080_Morning-Mist.jpg";
var urlForNight = "https://images.wallpaperscraft.ru/image/single/zvezdnoe_nebo_noch_derevya_nochnoj_pejzazh_118760_1920x1080.jpg";
var urlForEvening = "https://look.com.ua/pic/201407/1920x1080/look.com.ua-107015.jpg";

let ReplaceBackground = function () {
  if (CurrentTime >= 22 || CurrentTime < 5) {
    document.body.style.backgroundImage = `url(${urlForNight})`;
  } else if (CurrentTime >= 5 && CurrentTime < 12) {
    document.body.style.backgroundImage =  `url(${urlForMornig})`;
  } else if (CurrentTime >= 12 && CurrentTime < 18) {
    document.body.style.backgroundImage =  `url(${urlForDay})`;
  } else if (CurrentTime >= 18 && CurrentTime < 22) {
    document.body.style.backgroundImage =  `url(${urlForEvening})`;
  }
};
document.addEventListener("DOMContentLoaded", ReplaceBackground);


// скрипт для рисования таблицы
let table = document.createElement("table");
document.body.append(table);    
for (let i = 0; i < 10; i++) {
  let row_$i = document.createElement("tr");
  for (let j = 0; j < 10; j++) {
    let column_$j = document.createElement("td");
    row_$i.appendChild(column_$j);
    let input = document.createElement("input");
    column_$j.appendChild(input);
  }
  table.appendChild(row_$i);
}

let b = table.querySelectorAll("input"); // возвращает список соответствующий группе селекторов
b.forEach((element) => {
  element.setAttribute("type", "text");
  element.setAttribute("name", "tbl[]");
  element.setAttribute("value", "0");
});
let user = document.querySelector("#user");

// форма для заполнения 1

let p1 = document.createElement("p");
let input_user_min = document.createElement("input");

user.appendChild(p1);
p1.appendChild(input_user_min);

let querySelectInput1 = p1.querySelector("input");
querySelectInput1.setAttribute("type", "text");
querySelectInput1.setAttribute("name", "min");
querySelectInput1.setAttribute("value", "0");

// форма для заполнения 1

let p2 = document.createElement("p");
let input_user_max = document.createElement("input");

user.appendChild(p2);
p2.appendChild(input_user_max);

let querySelectInput2 = p2.querySelector("input");
querySelectInput2.setAttribute("type", "text");
querySelectInput2.setAttribute("name", "max");
querySelectInput2.setAttribute("value", "0");

// Реализация кнопки

let p3 = document.createElement("p");
let control_button = document.createElement("input");

user.appendChild(p3);
p3.appendChild(control_button);

let querySelectInput3 = p3.querySelector("input");
querySelectInput3.setAttribute("type", "button");
querySelectInput3.setAttribute("name", " ");
querySelectInput3.setAttribute("value", "Ввести данные");
querySelectInput3.setAttribute("onclick", "autocomlete();");

// функция возвращения случайного числа в диапазоне
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

//функция автозаполнния случайным числом

function autocomlete() {
  let minimum_value = document.getElementsByName("min")[0].value;
  let maximum_value = document.getElementsByName("max")[0].value;
  let fillGaps = document.getElementsByTagName("td");
  for (let i = 0; i < fillGaps.length; i++) {
    let input = fillGaps[i].getElementsByTagName("input")[0];
    input.value = getRandomInt(minimum_value, maximum_value);
  }
}


