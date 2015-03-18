window.onload = init;

function init() {
	var plus = document.querySelector('#plus');
	plus.onclick = addTheBlock;

}

function addTheBlock() {
	var totalBlock = document.querySelector('#total')
	var container = document.querySelector('#container')

	var clone = container.cloneNode(true);
	totalBlock.appendChild(clone)
}