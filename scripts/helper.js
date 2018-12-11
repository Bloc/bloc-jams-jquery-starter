class Helper {

  playPauseAndUpdate(song) {
    player.playPause(song);
    const getDuration = player.getDuration();
    $('.total-time').text(player.currentlyPlaying.duration);
    $('#time-control').text(player.totalTime);
  }
};
  const helper = new Helper();
