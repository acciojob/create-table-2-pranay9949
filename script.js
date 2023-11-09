let table=document.getElementById("myTable");
function createTable() {
    //Write your code here
	let row=prompt("input number of rows");
	let col=prompt("input number of columns");
	for(let i=0;i<row;i++){
        let trow=document.createElement("tr");
		for(let j=0;j<col;j++){
			let tCol=document.createElement("td");
			tCol.textContent=`Row-${i} Column-${j}`
			trow.append(tCol);
		}
			table.appendChild(trow);
	}
		
  
}
