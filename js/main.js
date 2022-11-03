//popup
$(document).ready(function(){
   function setCookie(name, value, expiredays){
      var todayDate = new Date();
      todayDate.setDate(todayDate.getDate() + expiredays);
      document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';';
   }

   $('.popup a').click(function(e){
      e.preventDefault();
      
      var chk = $('#chkBox').prop('checked');
      if(chk){ setCookie('exCookie','done',1);}
      $(this).parents('.popup').stop().fadeOut(0);
   });

   var cookieData = document.cookie;
   if(cookieData.indexOf('exCookie=done') < 0){ $('.popup').fadeIn(0); }
   else{ $('.popup').fadeOut(0); }
});


//main image slider
$(document).ready(function(){
var swiper = new Swiper(".main .main_slider", {
      autoplay: {
         delay: 5000,
         disableOnInteraction: false,
       },
       loop: true,
       allowTouchMove: false,
       navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },
       pagination: {
         el: ".swiper-pagination",
         clickable: true,
       },
   });
});


//new
$(document).ready(function(){
  $('.new01 figure').hover(function(){
    $('.new01').find('.figcaption01').stop().fadeIn('slow');
  }, function(){
    $('.new01').find('.figcaption01').stop().fadeOut('fast');
  });
  $('.new02 figure').hover(function(){
    $('.new02').find('.figcaption02').stop().fadeIn('slow');
  }, function(){
    $('.new02').find('.figcaption02').stop().fadeOut('fast');
  });
  $('.new03 figure').hover(function(){
    $('.new03').find('.figcaption03').stop().fadeIn('slow');
  }, function(){
    $('.new03').find('.figcaption03').stop().fadeOut('fast');
  });

  $('.new02 figure').hover(function(){
    $('.new02_hover').stop().fadeIn('slow');
  }, function(){
    $('.new02_hover').stop().fadeOut('fast');
  });
  $('.new03 figure').hover(function(){
    $('.new03_hover').stop().fadeIn('slow');
  }, function(){
    $('.new03_hover').stop().fadeOut('fast');
  });
});


//best
$(document).ready(function(){
  $('.best01 figure').hover(function(){
    $('.best01').find('.figcaption01').stop().fadeIn('slow');
  }, function(){
    $('.best01').find('.figcaption01').stop().fadeOut('fast');
  });
  $('.best02 figure').hover(function(){
    $('.best02').find('.figcaption02').stop().fadeIn('slow');
  }, function(){
    $('.best02').find('.figcaption02').stop().fadeOut('fast');
  });
  $('.best03 figure').hover(function(){
    $('.best03').find('.figcaption03').stop().fadeIn('slow');
  }, function(){
    $('.best03').find('.figcaption03').stop().fadeOut('fast');
  });

  $('.best02 figure').hover(function(){
    $('.best02_hover').stop().fadeIn('slow');
  }, function(){
    $('.best02_hover').stop().fadeOut('fast');
  });
  $('.best03 figure').hover(function(){
    $('.best03_hover').stop().fadeIn('slow');
  }, function(){
    $('.best03_hover').stop().fadeOut('fast');
  });
});


