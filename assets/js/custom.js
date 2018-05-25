(function(){
    /**
     * show "learn more" while hover over darwin family care page's image
     */
    $('.toggle-overlay-content').on('mouseenter',function(e){
        $(this).find('.overlay-content').show(300);
    });

    $('.toggle-overlay-content').on('mouseleave',function(e){
        $(this).find('.overlay-content').hide(300);
    });
    /** */

    /**
     * Open login form
     */
    $('.open-login-form').on('click',function(e){
        var currentLoginTypeAnchor = $(this);
        //get the login title
        var loginTitle = currentLoginTypeAnchor.attr('login-title');

        //sets login title in login form
        $('.login-title').text( loginTitle );

        //sets clicked image in login form
        $('.login-image-container').html(currentLoginTypeAnchor.html());

        //hide error message
        $('.login-error').hide();

        //open login form 
        $('.login-form-container').modal('show');
    });

    $('.login-form').on('submit',function(e){
        e.preventDefault();

        $('.login-error').show();
    });

})()