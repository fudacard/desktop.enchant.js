/**
 * desktop.enchant.js v0.1.0
 */
enchant.desktop = {};

enchant.desktop.Core = enchant.Class.create(enchant.Core, {
    initialize: function() {
        enchant.Core.call(this);
        
        var stage = enchant.Core.instance._element;
        stage.addEventListener('mousedown', function(e) {
            var core = enchant.Core.instance;
            var evt = new enchant.Event('mousedown');
            evt._initPosition(e.pageX, e.pageY);
            evt.button = e.button;
            var target = core.currentScene._determineEventTarget(evt);
            target.dispatchEvent(evt);
        }, false);
        stage.addEventListener('mousemove', function(e) {
            var core = enchant.Core.instance;
            var evt = new enchant.Event('mousemove');
            evt._initPosition(e.pageX, e.pageY);
            evt.button = e.button;
            var target = core.currentScene._determineEventTarget(evt);
            target.dispatchEvent(evt);
        }, false);
        stage.addEventListener('mouseup', function(e) {
            var core = enchant.Core.instance;
            var evt = new enchant.Event('mouseup');
            evt._initPosition(e.pageX, e.pageY);
            evt.button = e.button;
            var target = core.currentScene._determineEventTarget(evt);
            target.dispatchEvent(evt);
        }, false);
        if (document.onmousewheel !== undefined) {
            stage.addEventListener('mousewheel', function(e) {
                var core = enchant.Core.instance;
                var evt = new enchant.Event('mousewheel');
                evt._initPosition(e.pageX, e.pageY);
                evt.wheelDelta = e.wheelDelta;
                var target = core.currentScene._determineEventTarget(evt);
                target.dispatchEvent(evt);
                e.preventDefault();
            }, false);
        } else {
            stage.addEventListener('DOMMouseScroll', function(e) {
                var core = enchant.Core.instance;
                var evt = new enchant.Event('mousewheel');
                evt._initPosition(e.pageX, e.pageY);
                evt.wheelDelta = e.detail * -40;
                var target = core.currentScene._determineEventTarget(evt);
                target.dispatchEvent(evt);
                e.preventDefault();
            }, false);
        }
        stage.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        }, false);
    }
});

