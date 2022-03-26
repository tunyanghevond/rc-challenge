(function($) {
    'use strict';

    $(function() {
        var w = window.innerWidth;
        var h = window.innerHeight;


        // Article Items
        var $article    =   $('.article-item');
        $article.each(function() {
            var $this   =   $(this),
                $img  =   $this.find('.article-item-img'),
                $info   =   $this.find('.article-item-productinfo');

                $img.append($info);
        });

        
    });

})(jQuery);
($)