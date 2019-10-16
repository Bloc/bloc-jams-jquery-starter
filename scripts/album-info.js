{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
  $('#album-info .artist').text(album.artist);
  $('#release-info').text(album.releaseInfo);
}