{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $('button#play-pauuse').attr('playState', player.playState);
  });

  $('button#next').on('click', function(){
    player.playPause();
    $(this).attr('playState', player.playState);
    )
  });

  $('button#next').on('click', function(){
    if(play.playState !== 'playing') {return;}
  });
  const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
  const nextSongIndex = currentSongIndex + 1;
  if(nextSongIndex >= album.songs.length) {return;}
  
  const nextSong = album.songs[nextSongIndex];
  player.playPause(nextSong);
  });
}
