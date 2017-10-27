import {XMLHttpRequest} from 'xmlhttprequest';

var lastResponse = null;
var gotResponse = true;
var timer = null;

function detectChange(responseText, callback, pollingStr) {
	if(pollingStr != null) {
		console.log(pollingStr);
		callback(lastResponse, responseText);
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

function makeRequest(url, callback, pollingStr) {
	if(gotResponse) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				if(xhr.status == 200) {
					detectChange(xhr.responseText, callback, pollingStr);
				}
				else {
					console.error("Error: " + xhr.statusText);
				}
				
				gotResponse = true;
			}
		};
		gotResponse = false;
		xhr.send();
	}
}

export default function diffhook(url, interval, callback, pollingStr) {
	var timer = setInterval(() => { makeRequest(url, callback, pollingStr); }, interval);
	return timer;
}
