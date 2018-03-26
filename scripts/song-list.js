{
  //using forEach method to repeat through album.songs
  album.songs.forEach( (song, index) => {
    song.element = $(`
      <tr>
         <td>${index + 1}</td> 
         <td>${song.title}</td>
         <td>${song.duration}</td>
        </tr>
      `);
    //append elements to HTML
    $('#song-list').append(song.element);
  });
}
