// -------------------------
// 1. Модальне вікно 
// -------------------------
let userInterval = prompt("Введіть інтервал зміни зображень (у секундах):", "3");
userInterval = Number(userInterval) * 1000;

// -------------------------
// 2. Масив  зображень
// -------------------------

let images = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg"
];

let index = 0;

// -------------------------
// 3. Зміна зображень
// -------------------------
function changeImage() {
    const img = document.getElementById("sliderImage");
    img.src = images[index];

    index++;
    if (index >= images.length) index = 0;
}

setInterval(changeImage, userInterval);
changeImage();

// -------------------------
// 4. Фон залежно від часу доби
// -------------------------
let hour = new Date().getHours();

if (hour >= 6 && hour < 12) {
    document.body.style.backgroundColor = "#FFF7B3"; // ранок
} else if (hour >= 12 && hour < 18) {
    document.body.style.backgroundColor = "#B3E5FF"; // день
} else if (hour >= 18 && hour < 22) {
    document.body.style.backgroundColor = "#FFD1A8"; // вечір
} else {
    document.body.style.backgroundColor = "#2C2C54"; // ніч
    document.body.style.color = "white";
}

// -------------------------
// 5. Генерація таблиці 10×10
// -------------------------
function generateTable() {
    let min = Number(document.getElementById("minVal").value);
    let max = Number(document.getElementById("maxVal").value);

    let container = document.getElementById("tableContainer");
    container.innerHTML = "";

    let table = document.createElement("table");

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement("tr");

        for (let j = 0; j < 10; j++) {
            let td = document.createElement("td");

            td.textContent =
                Math.floor(Math.random() * (max - min + 1)) + min;

            // Шаховий малюнок
            if ((i + j) % 2 === 0) {
                td.style.backgroundColor = "#eee";
            } else {
                td.style.backgroundColor = "#777";
                td.style.color = "white";
            }

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    container.appendChild(table);
}
