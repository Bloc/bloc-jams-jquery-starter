class Helper {
  playPauseAndUpdate (song) {
    player.playPause(song)
    if(player.currentlyPlaying){
      $('#time-control .total-time').text( player.currentlyPlaying.duration )
    }else{
      $('#time-control .total-time').text( '–:––' )
    }
  }
}

const helper = new Helper();

