//parameter for changing grid size
let gridSize = 16;
const gridContainer = document.querySelector(".container");

const fillContainer = function(){
    //create a number of gridsize rows of gridsize of divs
    const gridRowDiv = document.createElement("div");
    const gridrow =[];
    for(let i=0;i<gridSize;i++){
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("gridDiv");
        gridrow.push(gridDiv);
        gridRowDiv.appendChild(gridDiv);
    }
    //cloning the row each iteration
    for(let i=0;i<gridSize;i++){
        

    }

}
