function subPosition(){
  var movie=$('a[title="영화"]').offset().left;
  var ticket=$('a[title="예매"]').offset().left;
  var theater=$('a[title="극장"]').offset().left;
  var event=$('a[title="이벤트"]').offset().left;
  var bonus=$('a[title="혜택"]').offset().left;
  $('#movie_sub').css('padding-left',movie-130);
  $('#ticket_sub').css('padding-left',ticket-130);
  $('#theater_sub').css('padding-left',theater-130);
  $('#event_sub').css('padding-left',event-130);
  $('#bonus_sub').css('padding-left',bonus-130);
}