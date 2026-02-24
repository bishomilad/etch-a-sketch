const gridContainer = document.querySelector(".container");
const clearBtn = document.querySelector(".clearBtn");
const colorPicker = document.querySelector(".toolbar > input")

//parameter for changing grid size
let gridSize = 16;


const fillContainer = function(){
    const gridRowDiv = document.createElement("div");
    gridRowDiv.classList.add("gridRowDiv");
    //create a row of gridsize of divs
    for(let i=0;i<gridSize;i++){
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("gridDiv");
        gridRowDiv.appendChild(gridDiv);
    }
    //cloning that row each iteration
    for(let i=0;i<gridSize;i++){
        gridContainer.appendChild(gridRowDiv.cloneNode(true));

    }

}

gridContainer.addEventListener("mouseout", e =>{
    let color = colorPicker.value;
    if(e.target.classList.contains("gridDiv")){
        e.target.style.backgroundColor = color;
    }
})

fillContainer();

clearBtn.addEventListener("click", e=>{
    gridSize= Number(document.querySelector(".inputText").value);
    gridSize= validateInput(gridSize);
    document.querySelector(".inputText").value = gridSize;
    deleteGrid();
    fillContainer();
})


function validateInput(input){
    if(input<1) return 2;
    if(input>100) return 100;
    return input;

}

function deleteGrid(){
gridContainer.querySelectorAll(".gridRowDiv").forEach(item => gridContainer.removeChild(item));
}
