module.exports = function (spider, players) {
    spider.position.y = 200;
    spider.position.x = Math.random() * 300 - 150;
    spider.position.z = Math.random() * 300 - 150;
    
    spider.on('block', function () { spider.jump() });
    [].concat(players).filter(Boolean).forEach(function (player) {
        spider.notice(player, { radius: 500 });
    });
    
    spider.on('notice', function (player) {
        spider.lookAt(player);
        spider.move(0, 0, 0.5);
    });
    
    spider.on('frolic', function (player) {
        spider.rotation.y += Math.random() * Math.PI / 2 - Math.PI / 4;
        spider.move(0, 0, 0.5 * Math.random());
    });
    
    spider.on('collide', function (player) {
        console.log('COLLISION');
    });
};
