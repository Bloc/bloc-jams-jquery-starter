class Helper {
 const Helper = 'helper'
  playerPauseAndUpdate(song) {
    player.playPause(song);

    const totalTime = player.getDuration();
    const newSong = album.songs[prevSongIndex];

    $('.total-time').text (player.newSong.duration);
    $('#time-control').text (player.totalTime);
  }
};
