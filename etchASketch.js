
const gridContainer = document.querySelector(".container");
const clearBtn = document.querySelector(".clearBtn");
const colorPicker = document.querySelector(".toolbar > input")
const toolbar = document.querySelector(".toolbar");


//parameter for changing grid size
let gridSize = 16;
let rainbow = false;
let holding=false;
let gridlines=true;

const fillContainer = function(){
    const gridRowDiv = document.createElement("div");
    gridRowDiv.classList.add("gridRowDiv");
    //create a row of gridsize of divs
    for(let i=0;i<gridSize;i++){
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("gridDiv");
        gridDiv.classList.add("gridLine");
        gridRowDiv.appendChild(gridDiv);
    }
    //cloning that row each iteration
    for(let i=0;i<gridSize;i++){
        gridContainer.appendChild(gridRowDiv.cloneNode(true));

    }

}


toolbar.addEventListener("click", e=>{
    switch(e.target.id){
        case "rainbow":
            e.target.classList.toggle("buttonToggled");
            rainbow=!rainbow;
            break;
        case "grid":
            gridlines=!gridlines;
            e.target.classList.toggle("buttonToggled");
            toggleGridLines();
            break;
        case "camera":
            takePhoto();
            
    }
})

document.addEventListener("mousedown", ()=>{
    holding=true;
})

document.addEventListener("mouseup", () =>{
    holding=false;
})

gridContainer.addEventListener("mouseover", e =>{
    paint(e, holding===true);
})

gridContainer.addEventListener("mousedown", e =>{
    paint(e);
})


function paint(e, condition =true){
    let color = rainbow? randomColor() : colorPicker.value;
    if(condition && e.target.classList.contains("gridDiv")){
        e.target.style.backgroundColor = color; //changes the color of the square
        //e.target.style.opacity = +e.target.style.opacity + 0.1; //cancelled feature (looked unappealing)
    }
}

function takePhoto(){
    html2canvas(document.querySelector(".container")).then(canvas => {
  document.body.appendChild(canvas);
});
    html2canvas(document.querySelector(".container")).then(canvas =>{
        const dataUrl = canvas.toDataURL("image/png");
        const newTab = window.open(dataUrl, '_blank');
         if (newTab) {
            newTab.focus();
        }
    });
}

clearBtn.addEventListener("click", e=>{
    //gets the new grid size
    gridSize= Number(document.querySelector(".inputText").value);
    //validates the grid size to avoid errors
    gridSize= validateInput(gridSize);
    document.querySelector(".inputText").value = gridSize;
    //delete the old elements to make up space for the new elements
    deleteGrid();
    fillContainer();
    if(!gridlines) toggleGridLines();
})

function validateInput(input){
    if(input<1) return 2;
    if(input>100) return 100;
    return input;

}

function randomColor(){
    return(`rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`);
}

function randomNumber(N){
    return Math.floor(Math.random()*(N+1));
}

function toggleGridLines(){
    //iterate through grid divs and toggle the gridLine class
    gridContainer.querySelectorAll(".gridDiv").forEach(item => item.classList.toggle("gridLine"));

}

function deleteGrid(){
    //deletes row by row of grid divs
    gridContainer.querySelectorAll(".gridRowDiv").forEach(item => gridContainer.removeChild(item));
}


fillContainer();
