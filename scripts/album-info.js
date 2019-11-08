{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtURL);
  $('.artist').text(album.artist)
  $('#release-info').text(album.releaseInfo);
}
