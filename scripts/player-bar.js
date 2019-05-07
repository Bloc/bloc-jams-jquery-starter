{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });

   $('button#next').on('click', function() {
     if (player.playState !== 'playing') { return; }

     const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
     const nextSongIndex = currentSongIndex + 1;
     if (nextSongIndex >= album.songs.length) { return; }

     const nextSong = album.songs[nextSongIndex];
     player.playPause(nextSong);
   });

//}
// remember to remove }); from above lines - for code to work
// adding previous button for track 05/07/2019 (May07) ^ copy above and reverse
// to make previous button

   $('button#previous').on('click', function () {
      if (player.playState!== 'playing') { return; }

      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const previousSongIndex = currentSongIndex - 1;
      if (previousSongIndex < 0) { return; }

      const previousSong = album.songs[previousSongIndex];

      player.playPause(previousSong);
   });
 }
