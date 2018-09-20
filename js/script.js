
  $(function(){
    $("#slider").slick({
      autoplay: true,
      autoplaySpeed: 500,
      speed:6000,
      fade: true
    });
  });

  $(function($) {
    $('#slidemenu-btn').on('click',function(){
      $('.globalnav').slideToggle();
    
    })
   })(JQuery);