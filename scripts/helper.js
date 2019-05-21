class Helper {
  playPauseAndUpdate(song) {
    player.playPause (song);
    const totalTime = player.getDuration(song);
    $(".total-time").text(totalTime);
  }

}

var helper = new Helper;
