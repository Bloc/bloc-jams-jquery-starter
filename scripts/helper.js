class Helper {
  playPauseAndUpdate(song) {
      player.playPause (song);
    const totalTime = player.currentlyPlaying.duration;
    $("#time-control .total-time").text(totalTime);

  }

}

var helper = new Helper();
