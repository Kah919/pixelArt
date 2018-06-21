console.log('CONNECTED!');

const sizePicker = document.querySelector('#sizePicker');
const inputHeight = document.querySelector('#inputHeight');
const inputWidth = document.querySelector('#inputWidth');
const submit = document.querySelector('#submit');
const colorPicker = document.querySelector('#colorPicker');
const pixelCanvas = document.querySelector('#pixelCanvas');

function makeGrid(width, height){
	pixelCanvas.innerHTML = ''; // changing our pixelCanvas to empty for us to fill

	for(var i = 0; i < height; i++){
		let row = document.createElement('tr'); // creates the rows

		for(var n = 0; n < width; n++){
		let cell = document.createElement('td'); // fills the columns

		row.appendChild(cell); // combines the row and cell together
	pixelCanvas.appendChild(row); // now putting the updated row to pixelCanvas

	cell.addEventListener('click', function(){ // when we click on a block it'll change color
		this.style.background = colorPicker.value;
			});
		}
	}
}

let width, height;

sizePicker.addEventListener('submit', function(){ // from the form
	event.preventDefault();
	height = inputHeight.value;
	width = inputWidth.value;
	makeGrid(width, height);
});



