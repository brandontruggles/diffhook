diffhook [![license](https://img.shields.io/github/license/brandonrninefive/diffhook.svg)](https://github.com/brandonrninefive/diffhook/blob/master/LICENSE.md) [![npm version](https://img.shields.io/npm/v/diffhook.svg)](https://www.npmjs.com/package/diffhook) [![Build Status](https://travis-ci.org/brandonrninefive/diffhook.svg?branch=master)](https://travis-ci.org/brandonrninefive/diffhook) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/brandonrninefive/diffhook/issues)  
===

Asynchronous webhooks for monitoring changes in external webpages. 

Getting Started
==

Using diffhook is as simple as the following (using ES6 syntax):

`npm i diffhook` or `yarn add diffhook`

```javascript
import diffhook from 'diffhook';

var hook = null;

function testFunc(oldResponse, newResponse) {
	console.log("Old Response:");
	console.log(oldResponse);
	console.log("New Response:");
	console.log(newResponse);
	clearInterval(hook);
}

var hook = diffhook("https://brandonrninefive.github.io", 10000, testFunc, "Tick");
```

The above setup will make an AJAX call to `https://brandonrninefive.github.io` and log the string `"Tick"` every 10 seconds. However, if a response has not been fully returned from the last AJAX call, or a connection error occurs, the next `"Tick"` will be logged, but a new AJAX call will not be sent out. Any connection errors will also be logged. `testFunc` will only be called if the AJAX request is successful, and the contents of the response differs between calls.

`diffhook` returns a call to `setInterval()`, meaning the hook can be stopped with `clearInterval()`, such as in the example above.

Parameters
==

`url` - (String) The URL of the webpage to monitor.

`interval` - (Number) The interval between AJAX calls (in milliseconds).

`callback` - (Function) The function to execute when a diff occurs between AJAX calls. This function is passed two parameters, `oldResponse`, and `newResponse`, representing the last and current contents of the AJAX response, respectfully.

`pollingStr` - (String) A string to log to the console each time an AJAX call is made. Passing `null` will prevent any logging.

Interval Courtesy
==

Since making frequent requests to URLs can throttle the response times of servers, setting `interval` to be too low could be perceived as a network attack. For this reason, it is highly recommended that you set `interval` to be a minimum of multiple seconds, or even minutes, in length. If you want to use a smaller `interval` value, do so at your own risk.
