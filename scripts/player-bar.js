{

  // Add event handler for play-pause button to change it's icon depending on whether a song is being played
   $('button#play-pause').on('click', function() {
     player.playPause();
     // Set value of attribute 'playState' of the button to whatever is the value of
     // player.playState
     $(this).attr('playState', player.playState);
   });

   // Add event handler for previous button to play previous song in the list unless the song being played
   // is the first song
    $('button#previous').on('click', function() {

      // If no song is being played, do nothing
      if (player.playState !== 'playing') { return; }

      // Get the index of the current song being played
       const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
       const previousSongIndex = currentSongIndex - 1;

       // Check if the song being played is last by comparing it with the length of album.songs array
       if (previousSongIndex < 0) { return;}

       const previousSong = album.songs[previousSongIndex];
       player.playPause(previousSong);
    });

    // Add event handler for next button to play next song in the list unless the song being played
    // is the last song
     $('button#next').on('click', function() {

       // If no song is being played, do nothing
       if (player.playState !== 'playing') { return; }

      // Get the index of the current song being played
       const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);

       const nextSongIndex = currentSongIndex + 1;

       // Check if the song being played is last by comparing it with the length of album.songs array
       if (nextSongIndex >= album.songs.length) { return; }

       const nextSong = album.songs[nextSongIndex];
       player.playPause(nextSong);

    });




}
