!function ($) {
    $(function(){

        var $root = $('html, body');

        // unique nav tag here
        $('a.scrollnav').click(function() {
            var href = $.attr(this, 'href');
            $root.animate({
                scrollTop: $(href).offset().top - 50
            }, 500, function () {
                window.location.hash = href;
            });
            return false;
        });
    })
}(window.jQuery)

