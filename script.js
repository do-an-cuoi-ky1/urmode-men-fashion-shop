document.getElementById("calculateButton").addEventListener("click", function () {
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const chest = parseInt(document.getElementById("chest").value);
    const waist = parseInt(document.getElementById("waist").value);
    const leg = parseInt(document.getElementById("leg").value);

    let shirtSize = "Không xác định";
    let pantSize = "Không xác định";

    // Tính size áo
    if (height >= 160 && height <= 167 && weight >= 50 && weight <= 60 && chest >= 92 && chest <= 100) {
        shirtSize = "S";
    } else if (height >= 163 && height <= 170 && weight >= 55 && weight <= 65 && chest >= 96 && chest <= 104) {
        shirtSize = "M";
    } else if (height >= 165 && height <= 172 && weight >= 65 && weight <= 75 && chest >= 100 && chest <= 108) {
        shirtSize = "L";
    } else if (height >= 170 && height <= 180 && weight >= 75 && weight <= 90 && chest >= 104 && chest <= 112) {
        shirtSize = "XL";
    } else if (height >= 170 && height <= 190 && weight >= 85 && weight <= 100 && chest >= 106 && chest <= 114) {
        shirtSize = "XLL";
    }

    // Tính size quần
    if (waist >= 70 && waist <= 75 && leg >= 70 && leg <= 75) {
        pantSize = "S";
    } else if (waist >= 75 && waist <= 80 && leg >= 75 && leg <= 80) {
        pantSize = "M";
    } else if (waist >= 80 && waist <= 85 && leg >= 80 && leg <= 85) {
        pantSize = "L";
    } else if (waist >= 85 && waist <= 90 && leg >= 85 && leg <= 90) {
        pantSize = "XL";
    } else if (waist >= 90 && waist <= 95 && leg >= 90 && leg <= 95) {
        pantSize = "XLL";
    }

    // Hiển thị kết quả
    document.getElementById("shirtSize").textContent = "Size Áo: " + shirtSize;
    document.getElementById("pantSize").textContent = "Size Quần: " + pantSize;
});
