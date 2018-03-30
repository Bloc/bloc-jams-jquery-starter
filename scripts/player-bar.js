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
   $('#time-control input').on('input', function (event) {
      player.skipTo(event.target.value);
  });
     setInterval( () => {
     if (player.playState !== 'playing') { return; }
     const currentTime = player.getTime();
     const duration = player.getDuration();
     const percent = (currentTime / duration) * 100;
     $('#time-control input').val(percent);
     $('#time-control .current-time').text( currentTime );
   }, 1000);
      $('#prev').click(function() {
      audio.pause();
      var prev = $('#playlist tr.active'). prev();
      if(prev.length == 0) {
     prev = $('playlist tr:last-child');
  }
     initAudio(prev);
     audio.play();
     showDuration();
     $('#play).hide();
     $('#pause').show;
  });
   $('#volume-control input').on('input', function (event) {
      player.setVolume(event.target.value);
      
   });
   
      $('button#previous').on('click', function() {
      var clickHandler = function() {
      if (currentlyPlayingSongNumber !== null){
      var currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);
       currentlyPlayingCell.html(currentlyPlayingSongNumber);
   }
        if (currentlyPlayingSongNumber !== songNumber){
            $(this).html(pauseButtonTemplate);
            setSong(songNumber);
            currentSoundFile.play();
            updateSeekBarWhileSongPlays();
            updatePlayerBarSong();

        } else if (currentlyPlayingSongNumber === songNumber){
            if (currentSoundFile.isPaused()){
                $(this).html(pauseButtonTemplate);
                currentSoundFile.play();
                updateSeekBarWhileSongPlays();
            }
            else{
                currentSoundFile.pause();
         
   });
 }
      
      
  
