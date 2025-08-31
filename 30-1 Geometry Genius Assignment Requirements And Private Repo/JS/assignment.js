function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText)
    console.log(base);

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area)

    // show triangle area 
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

    addToCalculationEntry('Triangle', area);
}

function calculateRectangleArea(){
    // get rectangle width
    const widthField = document.getElementById('rectangle-width')
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    // get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    // validate input: width and length
    if(isNaN(width) || isNaN(length)){
        alert('Please insert a number');
        return;
    }

    // calculate area
    const area = width * length;

    // show rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

    addToCalculationEntry('Rectangle', area);
}


// reusable function --> reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    // validate
    if(isNaN(base) || isNaN(height)){
        alert('Please insert number');
        return
    }
    const area = base * height;
    setElementInnerText('parallelogram-area', area);

    // add to calculation entry
    addToCalculationEntry('Parallelogram', area)
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);

    addToCalculationEntry('Ellipse', areaTwoDecimal);
}

// reusable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reusable set span, p, div, etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area;
}

// add to calculation entry
/**
 * 1. get the element where you want to add the dynamic HTML
 * 2. create an element you want to add
 * 3. if needed add some class
 * 4. set inner HTML. it could be dynamic Template string 
 * 5. append the created element as a child of the parent
 */
function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' '  + area)
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p);
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