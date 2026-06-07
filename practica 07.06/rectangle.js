// создаем прямоугольник
var rect = {
  x1: 2,
  y1: 8,
  x2: 10,
  y2: 3
};

// 1 - вывод информации
function showInfo(rect) {
  console.log("Левая верхняя точка: x=" + rect.x1 + ", y=" + rect.y1);
  console.log("Правая нижняя точка: x=" + rect.x2 + ", y=" + rect.y2);
}

// 2 - ширина
function width(rect) {
  var w = rect.x2 - rect.x1;
  return w;
}

// 3 - высота
function height(rect) {
  var h = rect.y1 - rect.y2;
  return h;
}

// 4 - площадь
function area(rect) {
  var s = (rect.x2 - rect.x1) * (rect.y1 - rect.y2);
  return s;
}

// 5 - периметр
function perimeter(rect) {
  var w = rect.x2 - rect.x1;
  var h = rect.y1 - rect.y2;
  var p = 2 * (w + h);
  return p;
}

// 6 - изменить ширину
function changeWidth(rect, x) {
  rect.x2 = rect.x2 + x;
}

// 7 - изменить высоту
function changeHeight(rect, x) {
  rect.y2 = rect.y2 - x;
}

// 8 - изменить ширину и высоту
function changeSize(rect, x1, y1) {
  rect.x2 = rect.x2 + x1;
  rect.y2 = rect.y2 - y1;
}

// 9 - сдвиг по X
function moveX(rect, x) {
  rect.x1 = rect.x1 + x;
  rect.x2 = rect.x2 + x;
}

// 10 - сдвиг по Y
function moveY(rect, x) {
  rect.y1 = rect.y1 + x;
  rect.y2 = rect.y2 + x;
}

// 11 - сдвиг по X и Y
function moveXY(rect, x1, y1) {
  rect.x1 = rect.x1 + x1;
  rect.x2 = rect.x2 + x1;
  rect.y1 = rect.y1 + y1;
  rect.y2 = rect.y2 + y1;
}

// 12 - точка внутри прямоугольника?
function isInside(rect, x1, y1) {
  if (x1 >= rect.x1 && x1 <= rect.x2 && y1 <= rect.y1 && y1 >= rect.y2) {
    return true;
  } else {
    return false;
  }
}

// проверяем все функции

console.log("--- Информация ---");
showInfo(rect);

console.log("Ширина: " + width(rect));
console.log("Высота: " + height(rect));
console.log("Площадь: " + area(rect));
console.log("Периметр: " + perimeter(rect));

console.log("--- Меняем ширину на +3 ---");
changeWidth(rect, 3);
showInfo(rect);

console.log("--- Меняем высоту на +2 ---");
changeHeight(rect, 2);
showInfo(rect);

console.log("--- Меняем размер: ширина -1, высота +1 ---");
changeSize(rect, -1, 1);
showInfo(rect);

console.log("--- Сдвиг по X на 5 ---");
moveX(rect, 5);
showInfo(rect);

console.log("--- Сдвиг по Y на -3 ---");
moveY(rect, -3);
showInfo(rect);

console.log("--- Сдвиг по X=-2, Y=+4 ---");
moveXY(rect, -2, 4);
showInfo(rect);

console.log("Точка (6,5) внутри? " + isInside(rect, 6, 5));
console.log("Точка (0,0) внутри? " + isInside(rect, 0, 0));
