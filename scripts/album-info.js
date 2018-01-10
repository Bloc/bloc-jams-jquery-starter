{
  $('#album-title').text(album.title);
  $('.artist').text(album.artist);
  $('#release-info').text(album.releaseInfo);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
}
