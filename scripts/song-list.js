{
  album.songs.forEach( (song, index) => {
    song.element = $('
      <tr>
        <td>index</td>
        <td>song.title</td>
        <td>song.duration</td>
      </tr>
    ');
      $('#song-list').append(song.element);
  });
}
