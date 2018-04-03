$( document ).ready(function() {
  $('button#play-pause').on('click', function(){
    player.playPause();
    $(this).attr('playState', player.playState);
  });


  $('button#next').on('click', function() {
    if (player.playerState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }
    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });

  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex - 1;
    if (previousSongIndex < 0) { return; }
    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);
  });

  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });

  setInterval( () => {
    if (player.playState !== 'playing') { return; }
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text(player.prettyTime(currentTime));
    $('#time-control input').val(percent);
    $('#time-control .total-time').text(player.prettyTime(duration));
  }, 1000);

  $('#volume-control input').on('input', function(event) {
    player.setVolume(event.target.value);
  });

});
