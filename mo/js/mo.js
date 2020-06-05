
$(function(){
  // 로그인폼보기
  $('#ticket_btn,#alarm_btn,#login_txt').click(function(){
    var conFirm=confirm('로그인후 이용가능 합니다.\n로그인 하시겠습니까?');
    console.log(conFirm);
    if(conFirm){
      $('.static_menu,.wrap,.burger_menu').hide();
      $('.login_form').show();
    }
  });

  // 로그인폼닫기
  $('#close_btn').click(function(){
    $('.static_menu,.wrap').show();
    $('.login_form').hide();
  });
  $('#burger_close_btn').click(function(){
    $('.burger_menu').hide();
  });

  // 화면스크롤이벤트
  $(window).scroll(function(){
    var scrTop=$(window).scrollTop();
    console.log(scrTop);
    if(scrTop>30){
      $('.static_top').css('background-color','rgba(0,0,0,0.9)');
    }else{
      $('.static_top').css('background-color','rgba(0,0,0,0)');
    }
  });

  // 서브멤버 토글
  $('#member_btn').click(function(){
    $('.member_sub').toggle();
    var tmp=$('.member_sub').css('display');
    if(tmp=='block'){
      $('.center').addClass('active_padding');
    }else{
      $('.center').removeClass('active_padding');
    }
  });
  
  // 햄버거메뉴
  $('#toggle_btn').click(function(){
    $('.burger_menu').css('display','flex');
  });

  $('.static_bottom_btn').click(function(){
    $('.bnb02').css('display','none');
    $(this).children().children('.bnb02').css('display','block');
    $('.bnb01').css('display','block');
    $(this).children().children('.bnb01').css('display','none');
  });

  // 메인메뉴 스와이퍼
  var swiper = new Swiper('.swiper-container.main_menu', {
    slidesPerView:'auto',
    spaceBetween: 30,
    freeMode:true,
  });

  // 메인메뉴 클릭이벤트
  $('.main_menu .swiper-slide a').click(function(){
    $('.main_menu .swiper-slide a').removeClass('active');
    $(this).addClass('active');
  });

  // 메인포스터 스와이퍼
  var swiper = new Swiper('.swiper-container.main_poster', {
    slidesPerView:'auto',
    spaceBetween:30,
  });

  // 랜덤 무비
  $('.movie_clip').removeClass('active');
  var ranNum=Math.random();
  if(ranNum<=0.2){
    $('.movie_clip').eq(0).addClass('active');
  }else if(ranNum<=0.4){
    $('.movie_clip').eq(1).addClass('active');
  }else if(ranNum<=0.6){
    $('.movie_clip').eq(2).addClass('active');
  }else if(ranNum<=0.8){
    $('.movie_clip').eq(3).addClass('active');
  }else{
    $('.movie_clip').eq(4).addClass('active');
  }

  // 연령색
  // 무비 플래이 스톱
 
  // 스몰 무비클립 스와이퍼
  var swiper = new Swiper('.swiper-container.swiper-container03', {
    slidesPerView:'auto',
    spaceBetween:10,
  });
  //  스몰 무비클립 재생
  $('#play01').click(function(){
    location.href="media/movie_clip01.mp4";
  });
  $('#play02').click(function(){
    location.href="media/movie_clip02.mp4";
  });
  $('#play03').click(function(){
    location.href="media/movie_clip03.mp4";
  });
  $('#play04').click(function(){
    location.href="media/movie_clip04.mp4";
  });
  $('#play05').click(function(){
    location.href="media/movie_clip05.mp4";
  });

  // 영화이벤트 스와이퍼
  var swiper = new Swiper('.swiper-container.swiper-container04', {
    slidesPerView:'auto',
    spaceBetween: 16,
    freeMode:true,
  });

  // 무비포스트 스와이퍼
  var swiper = new Swiper('.swiper-container.swiper-container05', {
    slidesPerView:'auto',
    spaceBetween:8,
    freeMode:true,
  });

})