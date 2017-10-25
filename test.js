import diffhook from './index.min.js';

function testFunc(oldResponse, newResponse) {
	console.log("Old Response:");
	console.log(oldResponse);
	console.log("New Response:");
	console.log(newResponse);
}

diffhook("https://brandonrninefive.github.io", 1000, testFunc, "Tick");
