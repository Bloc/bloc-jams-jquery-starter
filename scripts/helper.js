// class Helper {
//   // class=playPauseAndUpdate parameter=song
//     playPauseAndUpdate(song) {
//         const duration = player.getDuration();
//         $('#time-control .total-time').text(duration);
//         player.playPause(song);
//     }
// <<<<<<< HEAD
//     $('#time-control .total-time').text(totalTime);
//   };
// =======
// >>>>>>> check11
// }
// const helper = new Helper();

class Helper {
    playPauseAndUpdate(song) {
        player.playPause(song);
        const duration = player.currentlyPlaying.duration;
        $('#time-control .total-time').text(duration);

    }
}

const helper = new Helper();
