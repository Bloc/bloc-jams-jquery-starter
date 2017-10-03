$(document).ready(function(){
	$("button#play-pause").click( function(){
		player.playPause();
		$(this).attr("playState", player.playState);
	});

	$("button#next").click( function() {
		if(player.playState !== "playing") {return;}

		const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
		const nextSongIndex = currentSongIndex + 1;
		if(nextSongIndex >= album.songs.length) {return;}
		
		const nextSong = album.songs[nextSongIndex];
		player.playPause(nextSong);
	});

	$("button#previous").click( function() {
		if(player.playState !== "playing") {return;}

		const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
		const previousSongIndex = currentSongIndex - 1;
		if(previousSongIndex <= album.songs.indexOf(0)) {return;}

		const previousSong = album.songs[previousSongIndex];
		player.playPause(previousSong);
	});

});