function initHeader(){
    window.setInterval(function(){
        if ($('.slick-current').data('header')==='black'){
            $('.js-header').addClass('mod-black');
        } else{
            $('.js-header').removeClass('mod-black');
        }
      }, 500);
}

export default initHeader;