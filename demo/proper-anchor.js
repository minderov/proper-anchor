/*
var $root = $('html, body');
$('.anchorLink').click(function() {
    var anchor = $('[name="' + $.attr(this, 'href').substr(1) + '"]');
    var anchorParent = anchor.parent();
    var scrollMultiplier = 0.3, windowHeight = $(window).height(), anchorParentHeight = anchorParent.height();
    anchorParent.addClass('anchorBox');
    anchorParent.addClass('colored');

    //Вычисляем координаты скролла, при котором наш элемент будет чуть выше центра окна браузера
    if (anchorParentHeight >= windowHeight) {
        var scrollTo = anchor.offset().top;
    } else {
        var scrollTo = anchor.offset().top - windowHeight/2 + anchorParentHeight/2 + (windowHeight/2 - anchorParentHeight/2)*scrollMultiplier ;
    }

    $root.animate({
        scrollTop: scrollTo
    }, {
        duration: 400,
        complete: function() {
            anchorParent.removeClass('colored');
        }
    });

    return false;
});*/

(function( $ ) {

    $.fn.properAnchor = function(options) {

        var settings = $.extend({
            changeUrl: false,
            scrollDuration: 400,
            highlight: true,
            scrollToCenter: true
        }, options );


        var $root = $('html, body');
        this.click(function(e) {
            e.preventDefault();

            var hashName = $.attr(this, 'href').substr(1);
            var anchor = $('[name="' + hashName + '"]');
            if (!anchor.length) anchor = $('#' + hashName); //Fallback to id if name is not available
            var anchorParent = anchor.parent();
            var scrollMultiplier = 0.3, windowHeight = $(window).height(), anchorParentHeight = anchorParent.height();
            if (settings.highlight){
                anchorParent.addClass('anchorBox');
                anchorParent.addClass('colored');
            }

            // Calculate scroll coordinates such that element will be just above the center of browser
            if (anchorParentHeight >= windowHeight || !settings.scrollToCenter) {
                var scrollTo = anchor.offset().top;
            } else {
                var scrollTo = anchor.offset().top - windowHeight/2 + anchorParentHeight/2 + (windowHeight/2 - anchorParentHeight/2)*scrollMultiplier ;
            }

            $root.animate({
                scrollTop: scrollTo
            }, {
                duration: settings.scrollDuration,
                complete: function() {
                    anchorParent.removeClass('colored');
                }
            });

            if (settings.changeUrl) {
                setTimeout(function() {
                    history.pushState({}, "", '#'+hashName);
                }, settings.scrollDuration / 2)
            }
        });

        return this;

    };

}( jQuery ));
