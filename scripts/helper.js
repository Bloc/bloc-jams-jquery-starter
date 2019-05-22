class Helper {
  playPauseAndUpdate(song) {
    player.playPause (song);
    const totalTime = player.getDuration(song);
    $('#time-control .totaltime').text(totalTime);
  }

}

var helper = new Helper;
