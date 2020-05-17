class Helper{
  playPauseAndUpdate (song) {
    helper.playPauseAndUpdate(song);
    const totalTime = player.currentlyPlaying.duration;
    $('#time-control .total-time').text( totalTime );
  }
}

const helper = new Helper();
