
let box = document.querySelector(".container");

let multi = false;

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
		let alpha = 1;
		for(let cols=1;cols<=Gridsize;cols++){
				let column = document.createElement("div");
				column.style.cssText = "display:flex;"
				for(let row=1;row<=Gridsize;row++){
					let cell=document.createElement("div");
					if(multi){
					cell.addEventListener("mouseover",(e)=>{
							let red = Math.floor(Math.random() * 256);
							let green = Math.floor(Math.random() * 256);
							let blue = Math.floor(Math.random() * 256);
							e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
						},false)	
				}else{
					cell.addEventListener("mouseover",(e)=>{
						e.target.style.backgroundColor = `rgba(0,0,0,${alpha/10})`
						alpha=(alpha+1)%10;
					},false)
				}
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
	
let colorBtn = document.querySelector(".color");

colorBtn.addEventListener('click',(e)=>{
		multi=true;
		window.alert("Theme is set to color Recreate Grid to See effects");
	})
		
let blackBtn = document.querySelector(".black");

blackBtn.addEventListener('click',(e)=>{
		multi=false;
		window.alert("Theme is set to Black Recreate Grid to See effects");
	})
