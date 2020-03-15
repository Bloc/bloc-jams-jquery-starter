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
  $('#time-control input').on('input', function(event){ //why event here and not the other event handlers?
    player.skipTo(event.target.value); //where did 'event.target' and 'event.target.value' come from?

  });

  setInterval( () => { //confused as to why this is written this way
    if(player.playState !== 'playing') { return; } //why is this line here in this exact position?
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text(currentTime);
    $('#time-control input').val(percent);
  }, 1000);


}
