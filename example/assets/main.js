var fs = require('fs');
var src = fs.readFileSync(__dirname + '/substack.gif', 'base64');

var img = document.querySelector('img');
img.setAttribute('src', 'data:image/gif;base64,' + src);
document.body.appendChild(img);
