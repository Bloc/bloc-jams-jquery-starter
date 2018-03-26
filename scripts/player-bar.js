{
  $('button#play-pause').on('click', function(){
    player.playPause();
    $(this).attr('playState', player.playState);
  });


  $('button#next').on('click', function(){
    if (player.playerState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }
    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });

  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex - 1;
    if (previousSongIndex === -1) { return }
    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);
  });

  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });

  $('#volume-control input').on('input', function (event){
      player.setVolume(event.target.value);
  });

  setInterval( () => {
    if (player.playerState !== 'playing') { return; }
      const currentTime = player.getTime();
      const duration = player.getDuration();
      const percent = (currentTime / duration) * 100;
        $('#time-control .current-time').text( player.prettyTime(currentTime) );
        $('#time-control input').val(percent);
  }, 1000);

  function setSong(song) {
    player.playPause(song);
    $('#time-control .total-time').text( player.prettyTime(song.duration));
  };
});
