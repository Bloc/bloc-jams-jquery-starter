

class Helper{

  playPauseAndUpdate(song){
    player.playPause(song);


  const duration = player.getDuration();
  player.getDuration = $('#time-control.total-time').text(duration);
}
}
