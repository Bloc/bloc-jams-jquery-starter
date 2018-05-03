{
  $('#album-title').text(album.title);
  $('#release-info').text(album.releaseInfo);
  $('.artist').text(album.artist);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
}
