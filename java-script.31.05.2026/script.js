// Константи 
const CURRENT_YEAR = 2026;
const USD_TO_EUR = 0.92;   // курс долар → євро
const FILE_SIZE_MB = 820;  // розмір файлу у МБ

// 1. Привітання
function task1() {
    const name = prompt("Введіть ваше ім'я:");
    alert("Привіт, " + name + "!");
}

// 2. Вік
function task2() {
    const birthYear = prompt("Введіть рік народження:");
    const age = CURRENT_YEAR - Number(birthYear);
    alert("Вам " + age + " років (або виповниться у " + CURRENT_YEAR + " році).");
}

// 3. Периметр квадрата
function task3() {
    const side = prompt("Введіть довжину сторони квадрата:");
    const perimeter = Number(side) * 4;
    alert("Периметр квадрата = " + perimeter);
}

// 4. Площа кола
function task4() {
    const radius = prompt("Введіть радіус кола:");
    const area = Math.PI * Number(radius) ** 2;
    alert("Площа кола = " + area.toFixed(2));
}

// 5. Швидкість
function task5() {
    const distance = prompt("Введіть відстань між містами (км):");
    const hours = prompt("За скільки годин хочете дістатися?");
    const speed = Number(distance) / Number(hours);
    alert("Потрібна швидкість: " + speed.toFixed(2) + " км/год");
}

// 6. Конвертор валют (USD → EUR)
function task6() {
    const usd = prompt("Введіть суму в доларах ($):");
    const eur = Number(usd) * USD_TO_EUR;
    alert(usd + " $ = " + eur.toFixed(2) + " € (курс: " + USD_TO_EUR + ")");
}

// 7. Флешка
function task7() {
    const gb = prompt("Введіть обсяг флешки (ГБ):");
    const totalMB = Number(gb) * 1024;
    const filesCount = Math.floor(totalMB / FILE_SIZE_MB);
    alert("На флешку " + gb + " ГБ вміститься " + filesCount + " файлів по " + FILE_SIZE_MB + " МБ.");
}

// 8. Шоколадки
function task8() {
    const money = prompt("Скільки грошей у гаманці?");
    const price = prompt("Вартість однієї шоколадки:");
    const count = Math.floor(Number(money) / Number(price));
    const change = (Number(money) - count * Number(price)).toFixed(2);
    alert("Можна купити: " + count + " шоколадок.\nЗдача: " + change);
}

// 9. Паліндром тризначного числа (за допомогою %)
function task9() {
    const input = prompt("Введіть тризначне число:");
    const num = Number(input);
    const d1 = Math.floor(num / 100);         // сотні
    const d2 = Math.floor((num % 100) / 10);   // десятки
    const d3 = num % 10;                        // одиниці
    const palindrome = d3 * 100 + d2 * 10 + d1;
    alert("Паліндром числа " + num + " = " + palindrome);
}

// 10. Парне / непарне (без if та switch — через логічні оператори)
function task10() {
    const num = Number(prompt("Введіть ціле число:"));
    const result = (num % 2 === 0 && "Парне") || "Непарне";
    alert("Число " + num + " — " + result);
}