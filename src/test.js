import diffhook from './index.min.js';

var hook = null;

function testFunc(oldResponse, newResponse) {
	console.log("Old Response:");
	console.log(oldResponse);
	console.log("New Response:");
	console.log(newResponse);
	clearInterval(hook);
}

hook = diffhook("https://brandonrninefive.github.io", 1000, testFunc, "Tick");
