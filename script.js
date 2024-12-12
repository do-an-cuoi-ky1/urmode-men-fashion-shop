document.getElementById("calculateButton").addEventListener("click", function () {
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const chest = parseInt(document.getElementById("chest").value);
    const waist = parseInt(document.getElementById("waist").value);
    const leg = parseInt(document.getElementById("leg").value);

    let shirtSize = "Không xác định";
    let pantSize = "Không xác định";

    // Bảng tiêu chí size áo
    const shirtSizes = [
        { size: "S", height: [160, 167], weight: [50, 60], chest: [92, 100] },
        { size: "M", height: [163, 170], weight: [55, 65], chest: [96, 104] },
        { size: "L", height: [165, 172], weight: [65, 75], chest: [100, 108] },
        { size: "XL", height: [170, 180], weight: [75, 90], chest: [104, 112] },
        { size: "XLL", height: [170, 190], weight: [85, 100], chest: [106, 114] },
    ];

    // Bảng tiêu chí size quần
    const pantSizes = [
        { size: "S", waist: [70, 75], leg: [70, 75] },
        { size: "M", waist: [75, 80], leg: [75, 80] },
        { size: "L", waist: [80, 85], leg: [80, 85] },
        { size: "XL", waist: [85, 90], leg: [85, 90] },
        { size: "XLL", waist: [90, 95], leg: [90, 95] },
    ];

    // Tìm size áo gần nhất
    let minShirtDifference = Infinity;
    shirtSizes.forEach((size) => {
        const heightDiff = Math.min(Math.abs(height - size.height[0]), Math.abs(height - size.height[1]));
        const weightDiff = Math.min(Math.abs(weight - size.weight[0]), Math.abs(weight - size.weight[1]));
        const chestDiff = Math.min(Math.abs(chest - size.chest[0]), Math.abs(chest - size.chest[1]));
        const totalDiff = heightDiff + weightDiff + chestDiff;

        if (totalDiff < minShirtDifference) {
            minShirtDifference = totalDiff;
            shirtSize = size.size;
        }
    });

    // Tìm size quần gần nhất
    let minPantDifference = Infinity;
    pantSizes.forEach((size) => {
        const waistDiff = Math.min(Math.abs(waist - size.waist[0]), Math.abs(waist - size.waist[1]));
        const legDiff = Math.min(Math.abs(leg - size.leg[0]), Math.abs(leg - size.leg[1]));
        const totalDiff = waistDiff + legDiff;

        if (totalDiff < minPantDifference) {
            minPantDifference = totalDiff;
            pantSize = size.size;
        }
    });

    // Hiển thị kết quả
    document.getElementById("shirtSize").textContent = "Size Áo (gợi ý): " + shirtSize;
    document.getElementById("pantSize").textContent = "Size Quần (gợi ý): " + pantSize;
});
