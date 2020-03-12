{
  $('#album-title').text(album.title);

  $('img#album-cover-art').attr("src", album.albumArtUrl); //what is this actually doing? I didn't orginally type 'img' and it still worked

  $('.artist').text(album.artist);

  $('#release-info').text(album.releaseInfo);
}
