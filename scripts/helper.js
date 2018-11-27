class Helper {

  playerPauseAndUpdate(song) {
    player.playPause(song);

    const duration = player.getDuration();

    $('.total-time').text(player.currentlyPlaying.duration);
    $('#time-control').text (player.totalTime);
  }
}
var Helper = new helper();
