class Helper {
  playPauseAndUpdate(song) {
    player.playPause (song);
    const totalTime = player.getDuration(song);
    $('#total-time.totaltime').text(totalTime);
  }

}

var helper = new Helper;
