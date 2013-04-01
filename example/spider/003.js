var createGame = require('voxel-engine');
var game = createGame({
    texturePath: '/textures/',
    generate: function (x, y, z) {
        // ...
    },
    materials: [ ['dirt'], ['grass'], ['crate'], ['brick'] ]
});
game.appendTo('#container');
