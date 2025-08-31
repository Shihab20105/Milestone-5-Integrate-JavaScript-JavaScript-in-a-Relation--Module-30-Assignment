// ========================== Generic Area Calculator ==========================
function calculateArea(shape, inputIds, formula) {
    // get values from inputs
    const values = inputIds.map(id => getInputValue(id));

    // validate
    if (values.some(v => isNaN(v))) {
        alert('Please insert valid numbers');
        return;
    }

    // calculate
    const area = formula(...values).toFixed(2);

    // display
    setElementInnerText(`${shape.toLowerCase()}-area`, area);
    addToCalculationEntry(shape, area);

    // clear inputs
    clearInputs(...inputIds);
}

// =========================== The shape wrappers =======================================


function calculateTriangleArea() {
    calculateArea('Triangle', ['triangle-base', 'triangle-height'], 
        (base, height) => 0.5 * base * height);
}

function calculateRectangleArea() {
    calculateArea('Rectangle', ['rectangle-width', 'rectangle-length'], 
        (width, length) => width * length);
}

function calculateParallelogramArea() {
    calculateArea('Parallelogram', ['parallelogram-base', 'parallelogram-height'], 
        (base, height) => base * height);
}

function calculateRhombusArea() {
    calculateArea('Rhombus', ['rhombus-first-diagonal', 'rhombus-second-diagonal'], 
        (d1, d2) => 0.5 * d1 * d2);
}

function calculatePentagonArea() {
    calculateArea('Pentagon', ['pentagon-penta', 'pentagon-basement'], 
        (p, b) => 0.5 * p * b);
}

function calculateEllipseArea() {
    calculateArea('Ellipse', ['ellipse-semi-major-axis', 'ellipse-semi-minor-axis'], 
        (a, b) => Math.PI * a * b);
}
