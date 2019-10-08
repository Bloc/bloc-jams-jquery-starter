{
  $('button#play-pause').on('click', function() {
       helper.playPauseAndUpdate();
       $(this).attr('playState', player.playState);
     });

     $('button#next').on('click', function() {
       if (player.playState !== 'playing') { return; }

       const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
       const nextSongIndex = currentSongIndex + 1;
       if (nextSongIndex >= album.songs.length) { return; }

       const nextSong = album.songs[nextSongIndex];
       helper.playPauseAndUpdate(nextSong);
      });

      $('#time-control input').on('input', function (event) {
        player.skipTo(event.target.value);
      });

      setInterval( () => {
        if (player.playState !== 'playing') { return; }
        const currentTime = player.getTime();
        const duration = player.getDuration();
        const percent = (currentTime / duration) * 100;
        $('#time-control .current-time').text( currentTime );
        $('#time-control input').val(percent);
      }, 1000);

      $('#volume-control input').on('input', function (event) {
    player.setVolume(event.target.value);
  })

    setInterval( () => {
      if (player.playState !== 'playing') { return; }
      const currentTime = player.getTime();
      const duration = player.getDuration();
      const percent = (currentTime / duration) * 100;
      $('#time-control .current-time').text( currentTime );
      $('#time-control input').val(percent);
  }, 1000);

    setInterval( () => {
      if(player.playstate !== 'playing') {return; }
      const currentVolume = player.setVolume();
      $('#volume-control input').val();
    }, 1);

      $('button#previous').on('click', function() {
        if (player.playState !== 'playing') { return; }

        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const previousSongIndex = currentSongIndex - 1;
        if (previousSongIndex == -1) { return; }

        const previousSong = album.songs[previousSongIndex];
        helper.playPauseAndUpdate(previousSong);
            });
}
