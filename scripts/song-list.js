{
  album.songs.forEach( (song, index) => {
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
        <td>${(song.duration /60).toFixed(2)}</td>
      </tr>
    `);
    song.element.on('click', event => {
      player.playPause(song); //where does 'player' in player.playPause come from?
      $('button#play-pause').attr('playState', player.playState);
    });

    $('#song-list').append(song.element);//why is this placed after the click event?
  });
}

$('#song-list').click(function(){
  playPause(song = this.currentlyPlaying);
})
