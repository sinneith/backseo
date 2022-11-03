//search box
$(document).ready(function(){
   $('#search a').click(function(){
      $(this).parent().addClass('active');
   });

   $('html').click(function(e){ //html전체클릭했을때
      var trans = $('#search form').css('transform'); //폼의 트랜스폼값을 담는 변수

      if(trans == 'matrix(1, 0, 0, 1, 0, 0)'){ //scaleX(1)이 되었을때
         var has = $(e.target).hasClass('search_box'); //html중 클릭한 곳이 search_box라는 클래스를 갖고 있다면 true반환

         if(!has){ //search_box가 아닌 곳을 클릭했다면
            $('#search').removeClass('active'); //active클래스 제거
         }
      }
   });
});


//gnb focus
$(document).ready(function(){
   
   var gnb = '.gnb';
   var main = '.main_nav';
   var sub = '.sub_nav';
   var bg = '.subbg';
   var speed = 'fast';

   $(gnb).hover(function(){
       $(sub + ', ' + bg).stop().slideDown(speed);
       $(main).removeClass('active');
   },function(){
       $(sub + ', ' + bg).stop().slideUp(speed);
       $(main).removeClass('active');
   });
   
  $(main).focus(function(){
       $(sub + ', ' + bg).stop().slideDown(speed);
       $(main).removeClass('active'); 
       $(this).addClass('active');
  });
   
  $(sub).last().find('li:last a').keydown(function(e){
       if(e.keyCode == 0){
           if(!e.shiftKey){ 
               $(sub + ', ' + bg).stop().slideUp(speed);
               $(main).removeClass('active');
           }
       }
  });

  $(main).first().keydown(function(e){
       if(e.keyCode == 9){
           if(e.shiftKey){
               $(sub + ', ' + bg).stop().slideUp(speed);
               $(main).removeClass('active');
           }
       }
  });

  $(sub).find('li:last a').focus(function(){
       $(main).removeClass('active');
       $(this).parents(sub).prev().addClass('active');
   });

   $('header').mouseleave(function(){
       $(main).removeClass('active');
       $(sub + ', ' + bg).stop().slideUp(speed);
   });
});


//family site
$(document).ready(function(){
   $('.f_site button').click(function(){
      $(this).toggleClass('active');
   });
});


//scrolltop button
$(document).ready(function(){
   var btn = '.top_btn a';
   var speed = 1200;
   var easing = 'easeOutQuart';

   $(window).scroll(function(){
      var top = $(window).scrollTop();

      if(top > 200){
         $(btn).parent().fadeIn('slow');
      }else{
         $(btn).parent().fadeOut('slow');
      }
   });

   $(btn).click(function(e){
      e.preventDefault();
      $('html, body').animate({
         scrollTop: 0
      }, speed, easing);
   });
});


