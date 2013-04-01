var foo = require('./foo');

var div = document.createElement('div');
div.textContent = foo(5) * 10;
document.body.appendChild(div);
