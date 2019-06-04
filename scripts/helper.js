class Helper {
  playPauseAndUpdate (song) {
    let totalTime;

    if (song) {
      totalTime = player.prettyTime(song.duration);
    } else {
      totalTime = player.prettyTime(player.getDuration());
    };

    $('#time-control .total-time').text(totalTime);
    player.playPause(song);
  }
};

const helper = new Helper();
