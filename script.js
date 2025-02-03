function calculateRoots() {
    let a = 1
    if (document.getElementById("a").value) {
      a = parseFloat(document.getElementById("a").value);
    }
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let result = document.getElementById("result");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result.textContent = "Будь ласка, введіть коректні числа.";
        return;
    }

    let D = b * b - 4 * a * c;

    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        result.textContent = `Два корені: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;
    } else if (D === 0) {
        let x = -b / (2 * a);
        result.textContent = `Один корінь: x = ${x.toFixed(2)}`;
    } else {
        result.textContent = "Коренів немає (D < 0).";
    }
}