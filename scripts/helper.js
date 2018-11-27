class Helper {

  playerPauseAndUpdate(song) {
    player.playPause(song);

    const duration = player.getDuration();

    $('.total-time').text(player.currentlyPlaying.duration);
    $('#time-control').text (player.totalTime);
<<<<<<< HEAD

=======
    
>>>>>>> sliders-assignment
    }
  }

const helper = new Helper();
