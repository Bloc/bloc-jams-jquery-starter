class Helper {
  playPauseAndUpdate(song) {
    const totalTime = player.getDuration(song);
    $('#time-control .totaltime').text(totalTime);
    player.playPause (song);
  }

}

var helper = new Helper();
