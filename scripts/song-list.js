{

  album.songs.forEach( (song, index) => {

    // Notice the usage of adding 3 classes in first cell of each row. This
    // Allows use to leverage already defined CSS in player-bar.css and
    // avoid finding an alternative using JQuery/DOM scripting to change
    // the content of first cell of each row to as needed by the user story
    song.element = $(`
      <tr>
        <td>
          <button>
            <span class="song-number">${index + 1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
        </td>
        <td>${song.title}</td>
        <td>${song.duration}</td>
       </tr>
    `);

    song.element.on('click', event => {
      player.playPause(song);
      // Set value of attribute 'playState' of the play-pause button to whatever is the value of
      // player.playState
      $('button#play-pause').attr('playState', player.playState);
    });

    $('#song-list').append(song.element);

  });

}
