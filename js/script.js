(function() {
	//array
	var arr =  [1, 2, 3, null, undefined, 'a', 'b', 'c', '', true, false, 31, 42, 53,  , function () { }, {}, [], 15, 55, 4];
	var newArr = [];

	//css
	var containerCss = {
		'width': '1010px',
		'display': 'flex',
		'justify-content': 'center',
		'flex-wrap': 'wrap',
		'margin': '0 auto',
		'padding': '15px 0 0 15px',
		'border': '1px dotted red',
		'font-size': '22px'
	};
	var elementCss = {
		'width': '215px',
		'height': '150px',
		'display': 'flex',
		'justify-content': 'center',
		'align-items': 'center',
		'border': '1px solid blue',
		'margin': '0 15px 15px 0'
	};

	//cacheDom
	var $body = $('body');

	//createContainer
	var $container = $('<div></div>');
	$container.css(containerCss);

	render();

	//render
	function render() {
		processArray(arr, newArr);
		addElements(newArr);

		$container.appendTo($body);
	}

	//process array
	function processArray(arr, newArr) {
		for(var i = 0; i < arr.length; i++) {
			switch (typeof arr[i]) {
				case 'undefined':
					newArr.push('element is undefined');
					break;
				case 'number':
					if(!(arr[i]%3) && !(arr[i]%5)) {
						newArr.push('FizzBuzz');
					} else if(!(arr[i]%3)) {
						newArr.push('Fizz');
					} else if(!(arr[i]%5)) {
						newArr.push('Buzz');
					} else {
						newArr.push(arr[i]);
					}
					break;
				case 'string':
					if(arr[i]) {
						newArr.push(arr[i]);
					} else {
						newArr.push('string is empty');
					}
					break;
				case 'function':
					newArr.push('element is a function');
					break;
				case 'object':
					if(arr[i] == null){
						newArr.push('element is null');
					} else if(Array.isArray(arr[i])) {
						newArr.push('element is an array');
					} else {
						newArr.push('element is an object');
					}
					break;
				case 'boolean':
					newArr.push(arr[i]);
					break;
				default:
					newArr.push('element is undefined');
			}
		}
	}

	//add Elements to Container
	function addElements(arr) {
		for(var i = 0; i < arr.length; i++) {
			$container.append($('<div>' + arr[i] + '</div>').css(elementCss));
		}
	}
}());