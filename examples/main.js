enchant();
var game;
window.onload = function() {

    game = new Game(320, 320);
    game.preload('chara1.png');
    game.onload = function() {
        var bear = new Sprite(32, 32);
        bear.image = game.assets['chara1.png'];
        
        bear.addEventListener('mousedown', function(e) {
            if (e.button == 0) {
                bear.frame = (bear.frame + 4) % 5;
            } else if (e.button == 2) {
                bear.frame = (bear.frame + 1) % 5;
            }
        });
        bear.addEventListener('mousewheel', function(e) {
            if (e.wheelDelta > 0) {
                bear.rotate(15);
            } else {
                bear.rotate(-15);
            }
        });

        game.rootScene.addChild(bear);
    };
    game.start();
};