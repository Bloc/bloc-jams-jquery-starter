{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
  $('.artist').text(album.artist);   // Using . instead of # as H2 is a class unlike H1 which uses ID
  $('#release-info').text(album.releaseInfo);
}
