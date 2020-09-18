{
    $('button#play-pause').on('click', function() {
        player.playPause();
        $(this).attr('playState', player.playState);
    });

    $('button#next').on('click', function() {
        if (player.playState !== 'playing') { return; }

        const songIndex = album.songs.indexOf(player.currentlyPlaying);
        const nextSongIndex = songIndex + 1;
        if (nextSongIndex >= album.songs.length) { return; }

        const nextSong = album.songs[nextSongIndex];
        player.playPause(nextSong);
    });

    $('button#previous').on('click', function(){
        if (player.playState !== 'playing') { return; }

        const songIndex = album.songs.indexOf(player.currentlyPlaying);
        const previousSongIndex = songIndex - 1;
        if (previousSongIndex <= 0 ) { return; }

        const previousSong = album.songs[previousSongIndex];
        player.playPause(previousSong);
    });
}