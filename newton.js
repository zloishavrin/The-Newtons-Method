
function createTableHead(table) {

	//headers for table (column titles)
	let tableHeaders = ['Iteration Number', 'First Root', 'Function of Root',
	'Derivate of Function of Root', 'Dividing a function by its derivative',
	'Second Root', 
	'Absolute value of the difference between the first and the second root'];

	let tableHead = document.createElement('thead'); //create header for table
	let th; //column for the header
	let thText; //text in column

	//create all table headers
	for(let i = 0; i <= 5; i++) {

		//create columns in a head
		th = document.createElement('th');
		//get table headers
		thText = document.createTextNode(tableHeaders[i]);
		//embedding the content of an columns into an columns
		th.appendChild(thText);
		//embedding an element in a head
		tableHead.appendChild(th)

	}

	//embedding table head on table
	table.appendChild(tableHead);	

}

function createTableElement(tableBody, value1, value2, value3, 
	value4, value5, value6) {

	//array with string values
	let arrayRow = [value1, value2, value3, value4, value5, value6];

	tr = document.createElement('tr'); //tr is a table row

	//filling in row
	for(let i = 0; i <= 5; i++) {

		//td is a table item
		td = document.createElement('td'); 
		//tdText is the value of a table item
		tdText = document.createTextNode(arrayRow[i]);
		//embedding the content of an element into an element
		td.appendChild(tdText);
		//embedding an element in a row
		tr.appendChild(td);

	}

	//embedding row in a table
	tableBody.appendChild(tr);


}


//conversion into a mathematical expression on js
function toMath(equation) {
	
	//trigonometric functions
	equation = equation.replace(/sin/gi, 'Math.sin'); //sin
	equation = equation.replace(/cos/gi, 'Math.cos'); //cos
	equation = equation.replace(/ctg/gi, '1/Math.tan'); //ctg
	equation = equation.replace(/tg/gi, 'Math.tan'); //tg

	//logarithmic functions
	equation = equation.replace(/ln/gi, 'Math.log'); //ln
	equation = equation.replace(/lg/gi, 'Math.log10'); //lg

	//other functions
	equation = equation.replace(/abs/gi, 'Math.abs'); //abs
	equation = equation.replace(/cbrt/gi, 'Math.cbrt'); //cbrt
	equation = equation.replace(/sqrt/gi, 'Math.sqrt'); //sqrt
	equation = equation.replace(/exp/gi, 'Math.exp'); //exp

	return equation;

}

//getting equation in string
function getStrEquation() {

	let equation = document.getElementById('eqt').value;
	return equation;

}

//calculation of degree precision
function calculatingDegreePrecision(precision) {

	let degreePrecision = 0;

	while(precision != 1) {

			precision *= 10;
			degreePrecision++;

		}

	return degreePrecision;

}

//function calculation
function f(x) {

	//get str-function
	let equation = getStrEquation(); 
	//replacing standard expressions with Math.expressions
	equation = toMath(equation); 
	//return the value of the function
	return eval(equation);

}

//derivate function calculation
function derivativeF(x, precision) {

	let incrementX = precision/10;
	let incrementY = f(x+incrementX)-f(x);
	let functionDerivate = incrementX/incrementY;
	return functionDerivate;
	
}

//main function
function newtonMethod() {

	//description of the iteration object
	let iteration = {

		num: 1, //iteration number
		firstRoot: 1, //first root
		secondRoot: 1, //second root

	}

	
	 //get first root
	iteration.firstRoot = Number(document.getElementById('firstRoot').value);
	//get second root
	iteration.secondRoot = Number(document.getElementById('secondRoot').value);

	//get precision value
	let precision = Number(document.getElementById('precision').value); 
	//for further rounding
	let degreePrecision = calculatingDegreePrecision(precision); 

	let tableContain = document.getElementById('tableContain'); //get contain for table
	let beforeTable = tableContain.lastChild; //get location for inserting table
	let table = document.createElement('table'); //create table
	createTableHead(table); //create head for table
	let tableBody = document.createElement('tbody'); //create body for table
	let tableFooter = document.createElement('tfoot'); //create footer for table
	let tr; //row for the table
	let td; //element for the table
	let tdText; //value for element
	let aux; //let's introduce an auxiliary variable

	//calculating until the root is exact
	while(Math.abs(iteration.secondRoot-iteration.firstRoot) >= precision) {

		//creating a table row that corresponds to a loop iteration
		createTableElement(tableBody, iteration.num, iteration.firstRoot,
			f(iteration.firstRoot), derivativeF(iteration.firstRoot, precision),
			f(iteration.firstRoot)/derivativeF(iteration.firstRoot, precision),
			iteration.secondRoot, 
			Math.abs(iteration.firstRoot-iteration.secondRoot));

		//finding an Intermediate Root
		if(f(secondRoot) == 0) {

			break;

		}
		
		//assign to auxiliary variable value of first root
		aux = iteration.firstRoot; 
		//assign to first root variable value of second root
		iteration.firstRoot = iteration.secondRoot;
		//calculating next root
		iteration.secondRoot = aux - f(aux) / derivativeF(aux, precision);

		//to the next step
		iteration.num++;

	}

	//creating a table row of last iteration
	createTableElement(tableBody, iteration.num, iteration.firstRoot,
		f(iteration.firstRoot), derivativeF(iteration.firstRoot, precision),
		f(iteration.firstRoot)/derivativeF(iteration.firstRoot, precision),
		iteration.secondRoot, 
		Math.abs(iteration.firstRoot-iteration.secondRoot));

	//embedding table body on a table
	table.appendChild(tableBody);

	//output of final rounded root
	tr = document.createElement('tr'); //create row in a footer
	td = document.createElement('td'); //create element with text in a row with text
	//create text for element row
	tdText = document.createTextNode('Final Root of '+getStrEquation()+' = 0');
	td.appendChild(tdText); //embedding the content of an element into an element
	tr.appendChild(td); //embedding element into an row
	td = document.createElement('td'); //create emlement with final rot
	//round root and get him in text of element
	tdText = document.createTextNode(iteration.secondRoot.toFixed(degreePrecision+1));
	td.appendChild(tdText); //embedding final root in a element
	tr.appendChild(td); //embedding element with root in a row of footer
	tableFooter.appendChild(tr); //embedding row in a footer

	//embedding footer in a table
	table.appendChild(tableFooter);

	//create table in a containe
	tableContain.insertBefore(table, beforeTable);

} 