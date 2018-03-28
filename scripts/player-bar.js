{
  //adding click handler that targets play-pause button and call play.playPause() function in pla.js
  $('button#play-pause').on('click', function() {
    player.playPause();
    //adding  `playState` attribute to play/pause button then it will trigger css to react accordingly
    $(this).attr('playState', player.playerState);
  });

  $('button#next').on('click', function() {
    //check if song is playing first, or else the `next track` button wouldn't work.
    if (player.playState !== 'playing') { return; };
    //indexOf() method searches the array Player in player.js for a specific item currentlyPlaying and return its position
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;

    //if there is no more songs left the next Track button wouldn't work
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    //apply playPause button to the nextSong
    player.playPause(nextSong);
  })

  $('button#previous').on('click', function() {
    if(player.playState !== 'playing') { return; };
    // we need to define currentSongIndex in here, since it's not defined in this block (between our curly braces)
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex =currentSongIndex - 1;

    if (previousSongIndex < 0) { return; }
    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);
  })
}
