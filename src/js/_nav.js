(function($) {
    'use strict';

    $(function() {
        var w = window.innerWidth;
        var h = window.innerHeight;

        $('.navbar-trigger').on('click', function () {
            var $this = $(this);
            $this.toggleClass('open');
            $this.siblings('.navbar-list').slideToggle(300);
            $('body').toggleClass('scrollfix');
        });

    });

})(jQuery);
($)