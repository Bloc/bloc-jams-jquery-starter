class Helper {
  playPauseAndUpdate(song) {
    const totalTime = player.getDuration(song);
    $("#time-control .total-time").text(totalTime);
    player.playPause (song);
  }

}

var helper = new Helper();
