function banner(){
  // close banner
  $('.close').click(function(){
    $('.banner>div').hide();
  });

  // random banner
  $('.banner>div').removeClass('active');
  var ranNum=Math.random();
  if(ranNum>=0.5){
    $('.banner02').addClass('active');
  }else{
    $('.banner01').addClass('active');
  }
}