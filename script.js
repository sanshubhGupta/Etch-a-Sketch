let pixels = document.querySelector(".pixels");
let color = 'black';
let rainbow = ['red', '#FF355E', '#FF681F', 'orange', '#FFD12A', 'yellow', '#CCFF00', 'lime', 'green', '#00CC99', 'cyan', '#02A4D3', '#0066CC', 'blue', '#652DC1', '#8F47B3', '#C154C1', '#FC74FD', 'violet', 'indigo'];
let i = 0;
let n = 16;
function resetColors(){
    eraser.style.backgroundColor = 'white';
    ink.style.backgroundColor = 'white';
    rainbowTrail.style.backgroundColor = 'white';
    clear.style.backgroundColor = 'white';
    return;
}

let eraser = document.querySelector(".eraser");
eraser.addEventListener('click', ()=>{
    resetColors();
    eraser.style.backgroundColor = 'orange';
    color = 'white';
});

let ink = document.querySelector(".ink");
ink.addEventListener('click', ()=>{
    resetColors();
    ink.style.backgroundColor = 'orange';
    color = 'black';
});

let rainbowTrail = document.querySelector(".rainbow");
rainbowTrail.addEventListener('click', ()=>{
    resetColors();
    rainbowTrail.style.backgroundColor = 'orange';
    color = rainbow;
});

let clear = document.querySelector(".clear");
clear.addEventListener('click', ()=>{
    pixels.innerHTML = "";
    pixelsCreated(n);
});

function pixelsCreated(n = 16){
    resetColors();
    ink.style.backgroundColor = 'orange';
    for(let i=0; i<n*n; i++){
        let height = 100/n;
        let pi = height + "%";
        let pixel = document.createElement("div");
        pixel.classList.add('pix');
        pixel.style.backgroundColor = "white";
        pixel.style.height = pi;
        pixel.style.width = pi;
        pixel.style.margin = "0";
        if(n<=50){
            pixel.style.border = "0.5px solid rgb(240, 240, 240)";
        }
        pixel.style.boxSizing = "border-box";
        pixel.addEventListener("mouseover", ()=>{
            if(color != rainbow){
                pixel.style.backgroundColor = color;
            }
            else{
                pixel.style.backgroundColor = rainbow[i++ % 20];
            }
        });
        pixels.appendChild(pixel);
    }
}

pixelsCreated();

var output = document.querySelector(".rangeText");
let gridDimensions = document.querySelector(".gridDimensions");
let outputn = gridDimensions.value;

gridDimensions.addEventListener('input', ()=>{
    n = gridDimensions.value;
    output.innerHTML = n+' x '+n;
    pixels.innerHTML = "";
    color = 'black';
    pixelsCreated(n);
});