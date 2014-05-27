desktop.enchant.js
==================
enchant.jsでマウスイベントを扱うためのプラグインです。

# 使い方
mousedown, mousemove, mouseup, mousewheelイベントが追加されます。

    sprite.addEventListener('mousedown', function(e) {
        // e.button: マウスのボタン(0, 1, 2)
    });

    sprite.addEventListener('mousewheel', function(e) {
        // e.wheelDelta: マウスホイールの移動量
    });

# ライセンス
MIT License
