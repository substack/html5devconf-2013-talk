var createGame = require('voxel-engine');
var voxel = require('voxel');
var game = createGame({
    generate: voxel.generator['Valley'],
    texturePath: '/textures/'
});
game.appendTo('#container');

var explode = require('voxel-debris')(game, { power: 1.5, yield: 4 });
var erase = true;
function ctrlToggle (ev) { erase = !ev.ctrlKey }
window.addEventListener('keyup', ctrlToggle);
window.addEventListener('keydown', ctrlToggle);

game.on('fire', function (target, state) {
    var vec = game.cameraVector();
    var pt = game.raycast(game.cameraPosition(), vec, 100);
    if (!pt) return;
    if (erase) explode(pt)
    else game.createBlock(pt.addSelf(vec.multiplyScalar(-game.cubeSize/2)), 1);
});

var createPlayer = require('voxel-player')(game);
var substack = createPlayer('substack.png');
substack.possess();

window.addEventListener('keydown', function (ev) {
    if (ev.keyCode === 'R'.charCodeAt(0)) {
        substack.toggle();
    }
});

var createSpider = require('voxel-spider')(game);
var scamper = require('./lib/scamper');
for (var i = 0; i < 20; i++) {
    scamper(createSpider(), [ substack ]);
}
