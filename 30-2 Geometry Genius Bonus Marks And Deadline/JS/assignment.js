// ========================== Triangle ==========================
function calculateTriangleArea() {
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');

    if (isNaN(base) || isNaN(height)) {
        alert('Please insert valid numbers');
        return;
    }

    const area = (0.5 * base * height).toFixed(2);
    setElementInnerText('triangle-area', area);
    addToCalculationEntry('Triangle', area);
    clearInputs('triangle-base', 'triangle-height');
}

// ========================== Rectangle ==========================
function calculateRectangleArea() {
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');

    if (isNaN(width) || isNaN(length)) {
        alert('Please insert valid numbers');
        return;
    }

    const area = (width * length).toFixed(2);
    setElementInnerText('rectangle-area', area);
    addToCalculationEntry('Rectangle', area);
    clearInputs('rectangle-width', 'rectangle-length');
}

// ========================== Parallelogram ==========================
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    if (isNaN(base) || isNaN(height)) {
        alert('Please insert valid numbers');
        return;
    }

    const area = (base * height).toFixed(2);
    setElementInnerText('parallelogram-area', area);
    addToCalculationEntry('Parallelogram', area);
    clearInputs('parallelogram-base', 'parallelogram-height');
}

// ========================== Rhombus ==========================
function calculateRhombusArea() {
    const d1 = getInputValue('rhombus-first-diagonal');
    const d2 = getInputValue('rhombus-second-diagonal');

    if (isNaN(d1) || isNaN(d2)) {
        alert('Please insert valid numbers');
        return;
    }

    const area = (0.5 * d1 * d2).toFixed(2);
    setElementInnerText('rhombus-area', area);
    addToCalculationEntry('Rhombus', area);
    clearInputs('rhombus-first-diagonal', 'rhombus-second-diagonal');
}

// ========================== Pentagon ==========================
function calculatePentagonArea() {
    const p = getInputValue('pentagon-penta'); // perimeter
    const b = getInputValue('pentagon-basement'); // apothem

    if (isNaN(p) || isNaN(b)) {
        alert('Please insert valid numbers');
        return;
    }

    const area = (0.5 * p * b).toFixed(2);
    setElementInnerText('pentagon-area', area);
    addToCalculationEntry('Pentagon', area);
    clearInputs('pentagon-penta', 'pentagon-basement');
}

// ========================== Ellipse ==========================
function calculateEllipseArea() {
    const a = getInputValue('ellipse-semi-major-axis');
    const b = getInputValue('ellipse-semi-minor-axis');

    if (isNaN(a) || isNaN(b)) {
        alert('Please insert valid numbers');
        return;
    }

    const area = (Math.PI * a * b).toFixed(2);
    setElementInnerText('ellipse-area', area);
    addToCalculationEntry('Ellipse', area);
    clearInputs('ellipse-semi-major-axis', 'ellipse-semi-minor-axis');
}

// ========================== Reusable Functions ==========================
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    return parseFloat(inputField.value);
}

function setElementInnerText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function addToCalculationEntry(areaType, area) {
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');

    // store area in cm² by default in a data attribute
    p.dataset.cm2 = area;

    p.innerHTML = `${count + 1}. ${areaType}: ${area} cm<sup>2</sup> 
        <button class="btn btn-sm btn-success convert-btn">Convert</button>`;

    calculationEntry.appendChild(p);

    // attach convert functionality
    const convertBtn = p.querySelector('.convert-btn');
    let currentUnit = 'cm2';
    convertBtn.addEventListener('click', () => {
        currentUnit = convertArea(p, currentUnit);
    });
}

// ========================== Clear Inputs ==========================
function clearInputs(...fieldIds) {
    fieldIds.forEach(id => {
        const input = document.getElementById(id);
        input.value = '';
    });
}

// ========================== Convert Area Function ==========================
function convertArea(pElement, currentUnit) {
    const areaCm2 = parseFloat(pElement.dataset.cm2); // base area in cm²
    let newArea, newUnit;

    switch (currentUnit) {
        case 'cm2':
            newArea = (areaCm2 / 10000).toFixed(4); // convert to m²
            newUnit = 'm2';
            break;
        case 'm2':
            newArea = (areaCm2 * 100).toFixed(2); // convert to mm²
            newUnit = 'mm2';
            break;
        case 'mm2':
            newArea = areaCm2; // back to cm²
            newUnit = 'cm2';
            break;
        default:
            newArea = areaCm2;
            newUnit = 'cm2';
    }

    // update display
    const textParts = pElement.innerHTML.split(':');
    pElement.innerHTML = `${textParts[0]}: ${newArea} ${newUnit} 
        <button class="btn btn-sm btn-success convert-btn">Convert</button>`;

    // reattach convert button listener
    const convertBtn = pElement.querySelector('.convert-btn');
    convertBtn.addEventListener('click', () => {
        currentUnit = convertArea(pElement, newUnit);
    });

    return newUnit;
}



// ======================================================================================= //
/*                          Some Questions */
// ======================================================================================= //

/* 
Do you know my Website width and height make it standard.

Interactive geometry genius section: 
Interactive Geometry Genius section - width 1820 and height 130, background color light blue

'Interactive Geometry Genius'
Width-271 & height -93
position - x -92 & y -54

'Interactive' - text-black, text-bold & size - 45

'Geometry Genius' -text-grey, text - medium & size - 30

On the right hand side 'Blog button' - color- blue, width-120 & height-48

'Blog' - text-white, text-bold & size-20 , width-44 & height-30
make the blog button work and open new page with new html - There should should be written some questions- 
1. What is DOM and What is the purpose of DOM?
2. How can you select elements from the DOM? Just give the names?
3.What is Event Bubble ?
4. What is a callback function and what is it used for? 

// ======================================================================================= //
Seven cards total
six cards - width-437 & height-563 and inside six cards at bottom it will be six 'calculate button'  - width-350 & height-56 color blue (calculate - text-white, width-93 & height-24, tex-bold & size-20).
inside first card it will be Triangle - width-243 & height-194, color-yellow
under 'Triangle img' it will be written  'Triangle' - width-100 & height-30, text-black & bold & size25 
under 'Triangle word' there will be ('Area (A) =' - w-77 & h-19 & text-grey,). next to it ('0.5 b' - w56 & h-19 & text-grey). next to it ('h'- w-10 & h-19, text-grey)
input section : there will be a div which is- w-290 & h-32, inside the div two input field - w-95 & h-32 and right side of those two input field there will be letters 'cm' - w-23 & h-19, text-grey  
and forth card - width- 437 & height- 454 and it will be next to third card
*/