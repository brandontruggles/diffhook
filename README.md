diffhook
===

Asynchronous webhooks for monitoring changes in external webpages.

Getting Started
==

Using diffhook is as simple as the following:

```javascript
import diffhook from 'diffhook';
```

```javascript
diffhook("https://brandonrninefive.github.io", 1000, testFunc, "Tick");
```

where `testFunc` is defined as:

```javascript
function testFunc(oldResponse, newResponse) {
	console.log("Old Response:");
	console.log(oldResponse);
	console.log("New Response:");
	console.log(newResponse);
}
```

The above setup will make an AJAX call to `https://brandonrninefive.github.io` every 1000 ms and log the string `"Tick"`. `testFunc` will only be called if the contents of the AJAX request is changed between calls.

Parameters
==

`url` - (String) The URL of the webpage to monitor.

`interval` - (Number) The interval between AJAX calls (in milliseconds).

`callback` - (Function) The function to execute when a diff occurs between AJAX calls.

`pollingStr` - (String) A string to log to the console each time an AJAX call is made.
