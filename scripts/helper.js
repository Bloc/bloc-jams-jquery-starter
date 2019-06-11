class Helper {

    playPauseAndUpdate(song) {
      player.playPause(song);
      $('.total-time').text( player.prettyTime(player.currentlyPlaying.duration) );
}
}

const helper = new Helper();
