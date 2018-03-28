{
  //using forEach method to repeat through album.songs

   album.songs.forEach( (song, index) => {
// song.element > .element just means we are going inside of `song` to retrieve its properties.
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
      console.log(song);

      song.element.on('click', event => {
        player.playPause(song);

    //syncing the play button on both play bar and icon in front of the song.
        $('button#play-pause').attr('playState', player.playState);
      })
    //append elements to HTML
    $('#song-list').append(song.element);
  });
}
