class Helper{
  playPauseAndUpdate(song){
    player.playPause(song);

    $('#time-control .total-time').text(song.duration);
  }
}

const helper = new Helper();
