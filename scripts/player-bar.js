{
  $('button#play-pause').on('click', function(){ //what is 'button'?
    player.playPause(); //why not 'player.playPause(song)' <-- argument included in parentheses
    $(this).attr('playState', player.playState);
  });

  $('button#next').on('click', function(){
    if (player.playState !== 'playing'){ return; }


    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >=album.songs.length) {return; }
    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });

  $('button#previous').on('click', function(){
    if (player.playState !== 'playing'){ return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex - 1;
    if (previousSongIndex < 0) { return; }
    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);

  });
}
