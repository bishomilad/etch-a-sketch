//parameter for changing grid size
let gridSize = 16;
const gridContainer = document.querySelector(".container");

const fillContainer = function(){
    const gridRowDiv = document.createElement("div");
    gridRowDiv.classList.add("gridRowDiv");
    const gridrow =[];
    //create a row of gridsize of divs
    for(let i=0;i<gridSize;i++){
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("gridDiv");
        gridrow.push(gridDiv);
        gridRowDiv.appendChild(gridDiv);
    }
    //cloning that row each iteration
    for(let i=0;i<gridSize;i++){
        gridContainer.appendChild(gridRowDiv.cloneNode(true));

    }

}

gridContainer.addEventListener("mouseover", e =>{
    if(e.target.classList.contains("gridDiv")){
        e.target.classList.add("hoveredOn");
    }
})

fillContainer();
