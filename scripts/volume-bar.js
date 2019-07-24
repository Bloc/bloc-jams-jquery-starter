{  $('#volume-control .seek-bar').on('click', function(event) {
    if (player.playState !== 'playing') { return; }
    player.setVolume(event.target.value);
    });
}
