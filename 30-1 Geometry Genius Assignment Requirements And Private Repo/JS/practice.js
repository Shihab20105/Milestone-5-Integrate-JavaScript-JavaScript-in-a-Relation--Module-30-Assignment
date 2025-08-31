// ================= Utility Functions =================
function getInputValue(id) {
  const value = parseFloat(document.getElementById(id).value);
  return isNaN(value) ? null : value;
}

function setText(id, value) {
  document.getElementById(id).innerText = value;
}

function validateInputs(...values) {
  for (const val of values) {
    if (val === null) return false;
  }
  return true;
}

// ================= Area Calculation Functions =================

// Generic area calculator for simple formulas
function calculateArea(ids, formula, outputId) {
  const values = ids.map(getInputValue);
  if (!validateInputs(...values)) return alert("Enter valid numbers!");
  const area = formula(...values);
  setText(outputId, area.toFixed(2));
  return area;
}

// Triangle: 0.5 * b * h
function calculateTriangleArea() {
  calculateArea(
    ["triangle-base", "triangle-height"],
    (b, h) => 0.5 * b * h,
    "triangle-area"
  );
}

// Rectangle: w * l
function calculateRectangleArea() {
  calculateArea(
    ["rectangle-width", "rectangle-length"],
    (w, l) => w * l,
    "rectangle-area"
  );
}

// Parallelogram: b * h
function calculateParallelogramArea() {
  calculateArea(
    ["parallelogram-base", "parallelogram-height"],
    (b, h) => b * h,
    "parallelogram-area"
  );
}

// Rhombus: 0.5 * d1 * d2
function calculateRhombusArea() {
  calculateArea(
    ["rhombus-d1", "rhombus-d2"],
    (d1, d2) => 0.5 * d1 * d2,
    "rhombus-area"
  );
}

// Pentagon: 0.25 * √(5(5+2√5)) * a²
function calculatePentagonArea() {
  calculateArea(
    ["pentagon-side"],
    (a) => 0.25 * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * a * a,
    "pentagon-area"
  );
}

// Ellipse: π * a * b
function calculateEllipseArea() {
  calculateArea(
    ["ellipse-a", "ellipse-b"],
    (a, b) => Math.PI * a * b,
    "ellipse-area"
  );
}

// Circle: π * r²
function calculateCircleArea() {
  calculateArea(
    ["circle-radius"],
    (r) => Math.PI * r * r,
    "circle-area"
  );
}

// ================= Optional: Add Calculation Log =================
/*
You can create a dynamic log below cards if needed:

function addToLog(shape, area) {
  const log = document.getElementById("calculation-log");
  const p = document.createElement("p");
  p.innerText = `${shape}: ${area} cm²`;
  log.appendChild(p);
}
*/
