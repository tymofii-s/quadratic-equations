function calculateRoots() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    
    let resultDiscriminant = document.getElementById("result-discriminant");
    let resultVieta = document.getElementById("result-vieta");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultDiscriminant.innerHTML = "Будь ласка, введіть коректні числа.";
        resultVieta.innerHTML = "";
        return;
    }

    let D = b * b - 4 * a * c;

    let result = document.getElementById("result")
    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        
        resultDiscriminant.innerHTML = `
            <p>D = (${b})² - 4 * ${a} * ${c} = ${D}</p>
            <p>x₁ = <span class="fraction"><span class="numerator">${-b} + √${D}</span><span class="denominator">${2 * a}</span></span> = ${x1.toFixed(2)}</p>
            <p>x₂ = <span class="fraction"><span class="numerator">${-b} - √${D}</span><span class="denominator">${2 * a}</span></span> = ${x2.toFixed(2)}</p>
        `;

        resultVieta.innerHTML = `
            <p>x₁ + x₂ = ${(x1 + x2).toFixed(2)}</p>
            <p>${x1} + ${x2} = ${(x1 + x2).toFixed(2)}</p>
            <p>x₁ * x₂ = ${(x1 * x2).toFixed(2)}</p>
            <p>${x1} * ${x2} = ${(x1 * x2).toFixed(2)}</p>
        `;

        result.textContent = `Два корені: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;

    } else if (D === 0) {
        let x = -b / (2 * a);
        
        resultDiscriminant.innerHTML = `
            <p>D = (${b})² - 4 * ${a} * ${c} = 0</p>
            <p>x = <span class="fraction"><span class="numerator">${-b}</span><span class="denominator">${2 * a}</span></span> = ${x.toFixed(2)}</p>
        `;

        resultVieta.innerHTML = `
            <p>x₁ + x₂ = ${(x + x).toFixed(2)}</p>
            <p>${x} + ${x} = ${(x + x).toFixed(2)}</p>
            <p>x₁ * x₂ = ${(x * x).toFixed(2)}</p>
            <p>${x} * ${x} = ${(x * x).toFixed(2)}</p>
        `;

        result.textContent = `Один корінь: x = ${x.toFixed(2)}`;

    } else {
        resultDiscriminant.innerHTML = "Коренів немає (D < 0).";
        resultVieta.innerHTML = "Теорема Вієта не застосовується.";

        result.textContent = "Коренів немає (D < 0)."
    }
}
