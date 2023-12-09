
let box = document.querySelector(".container");

createGrid(16);

function createGrid(Gridsize=0){
		
		box.innerHTML = "";
		
		if(Gridsize==0){
				Gridsize = Number(document.querySelector("#gridSize").value);
		}
	
		
		
		if(Gridsize<1 || Gridsize>100){
				window.alert("Please Enter a value between 0-100");
			}
		let width = 960/Gridsize;
		for(let cols=1;cols<=Gridsize;cols++){
				let column = document.createElement("div");
				column.style.cssText = "display:flex;"
				for(let row=1;row<=Gridsize;row++){
					let cell=document.createElement("div");
					cell.addEventListener("mouseover",(e)=>{
							e.target.style.backgroundColor = "black";
						},false)
					cell.style.cssText = `border:1px solid black;width:${width}px;`;
					column.append(cell);
				}
				box.append(column);
				
			}
		
	}


let CreateBtn = document.querySelector("#createBtn");

CreateBtn.addEventListener('click',(e)=>{
		createGrid();
	});
