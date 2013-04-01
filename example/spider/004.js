var createGame = require('voxel-engine');
var game = createGame({
    texturePath: '/textures/',
    generate: function (x, y, z) {
        if (x*x + y*y + z*z > 20*20) return 0;
        return Math.floor(Math.random() * 4) + 1;
    },
    materials: [ ['dirt'], ['grass'], ['crate'], ['brick'] ]
});
game.appendTo('#container');
