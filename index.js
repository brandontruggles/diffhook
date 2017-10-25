import {XMLHttpRequest} from 'xmlhttprequest';

var lastResponse = null;

function detectChange(responseText, callback, pollingStr) {
	if(pollingStr != null) {
		console.log(pollingStr);
	}
	if(lastResponse == null) {
		lastResponse = responseText;
	}
	else {
		if(responseText != lastResponse) {
			callback(lastResponse, responseText); //Send the old page and the new page to the callback
			lastResponse = responseText;
		}
	}
}

function makeRequest(url, callback, pollingStr, cachePath) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			detectChange(xhr.responseText, callback, pollingStr, cachePath);
		}
	};
	xhr.send();
}

export default function diffhook(url, interval, callback, pollingStr, cachePath) {
	setInterval(() => { makeRequest(url, callback, pollingStr); }, interval);
}
