// modules.define('gallery-item', ['i-bem-dom'], function(provide, bemDom) {

// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {
                
//             }
//         }
//     }
// }));

// });

import fancybox from '@fancyapps/fancybox';

$( '[data-fancybox="gallery"]' ).fancybox({
    infobar : false,
    caption : function( instance, item ) {
        var caption = $(this).data('link') || '';
        var title = $(this).data('title') || '';
        var tag = $(this).data('tag') || '';

        return '<div class="modal-discript"><p class="modal-discript__tag">' + tag + '</p><p class="modal-discript__link-wrapper"><a href="' + caption + '" class="modal-discript__link">' + title +'</a></p></div>';
    }
});