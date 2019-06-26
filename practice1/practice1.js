jQuery(document).ready(function(){


$('.fa-bars').click(function(){

    if ($('.top-menu').hasClass('.active')) {
      $('.top-menu').removeClass('.active');
      $('.top-menu').slideUp();
    }else{
      $('.top-menu').addClass('.active');
      $('.top-menu').slideDown();
    }


});











 });
