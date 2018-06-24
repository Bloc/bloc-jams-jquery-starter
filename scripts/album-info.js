{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
  //mapping the artist and release info from the album object
  $('.artist').text(album.artist);
  $('#release-info').text(album.releaseInfo);
}
