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
        <td>${song.duration}</td>
       </tr>
    `);

        song.element.on('click', event => {
          player.playPause(song);
          $('button#play-pause').attr('playState', player.playState);
        });

    $('#song-list').append(song.element);
  });
}
// code above this line done 05/06/2019 - code below is 05/07/2019
//
// {
//   album.songs.forEach( (song, index) => {
//     song.element = $(`
//       <tr>
//       <td>
//            <button>
//              <span class="song-number">${index + 1}</span>
//              <span class="ion-play"></span>
//              <span class="ion-pause"></span>
//            </button>
//          </td>
//       <td>${song.title}</td>
//       <td>${song.duration}</td>
//        </tr>
//     `);
//
//     song.element.on('click', event => {
//       player.playPause(song);
//     });
//
//        $('#song-list').append(song.element);
//   });
// }
