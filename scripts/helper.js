class Helper{
  playPauseAndUpdate(song) {
    player.playPause(song);
    $('#time-control .total-time').player.getDuration();
  }  
}

const helper = new Helper();