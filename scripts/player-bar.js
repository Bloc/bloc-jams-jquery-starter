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
     player.playPause(nextSong);
   });
   
      $('button#previous').on('click', function() {
     if (player.playState !== 'playing') { return; }

     const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
     const prevSongIndex = currentSongIndex - 1;
     if (prevSongIndex < 0) { return; }

     const prevSong = album.songs[prevSongIndex];
     player.playPause(prevSong);
   });

   $('#volume-control input').on ('input', function (event) {
	   player.setVolume(event.target.value);
	});	   
	
	   $('#time-control input').on('input', function (event) {
 player.skipTo(event.target.value); 
});
   
   
   setInterval( () => {
	if (player.playState !== 'playing'){return;}
	const currentTime = player.getTime();
	const duration = player.getDuration ();
	const percent = (currentTime/duration) * 100;
	$ ('#time-control input').val(percent);
	$ ('#time-control .current-time').text(currentTime);

	}, 1000);
 }