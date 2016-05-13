var myHeading1 = document.querySelector('h1');
var myHeading2;
var lastUser;

init();
startMain();


myHeading1.onclick = function() {
	let now = new Date( );
    myHeading1.textContent = 'Updated time after click to ' + now.getHours() + ':' + now.getMinutes();
}

//displayAlert('Hello world alarm!');


function displayAlert(alertText) {
	  alert(alertText);
	}

function listenToImageClicks() {
	var myImage = document.querySelector('img');

/*	myImage.onmouseover = function() {
	    var mySrc = myImage.getAttribute('src');
	    if(mySrc === 'images/smile1.png') {
	      myImage.setAttribute ('src','images/smile2.png');
	    } else {
	      myImage.setAttribute ('src','images/smile1.png');
	    }
	}*/
	
	myImage.onmouseover = function() {
		myImage.setAttribute ('src','images/smile2.png');
	}
	
	myImage.onmouseout = function() {
		myImage.setAttribute ('src','images/smile1.png');
	}
	
	myImage.onclick = function() {
		myImage.setAttribute ('src','images/smile3.png');
	}
}



function setUserName() {
	lastUser = prompt('Enter your name: ');
	localStorage.setItem('name', lastUser);
}

function listenToButtonClicks( ) {
	
	var myButton = document.querySelector('button');
	myButton.onclick = function() {
			setUserName( );
			myHeading1.textContent = 'Hello ' + localStorage.getItem('name') + ' welcome in button test!'; 
	}
}

function init() {
	lastUser = 'Unknown user';
}

function startMain() {
	myHeading1.textContent = 'Hello world from main.js!';
	/** Comments in java script 
	Multi line **/
	// Or single line comments

	myHeading2 = document.querySelector('h2');
	myHeading2.textContent = 'Can you please mouse over or click me? ;-)';

	
	listenToImageClicks();
	
	listenToButtonClicks();
	
}