var createGame = require('voxel-engine');
var game = createGame({
    texturePath: '/textures/',
    generate: require('voxel').generator.Valley,
    materials: [ ['dirt'], ['grass'], ['crate'], ['brick'] ]
});
game.appendTo('#container');

var createPlayer = require('voxel-player')(game);
var substack = createPlayer('substack.png');
substack.possess();

window.addEventListener('keydown', function (ev) {
    if (ev.keyCode === 'R'.charCodeAt(0)) substack.toggle();
});

var createSpider = require('voxel-spider')(game);
