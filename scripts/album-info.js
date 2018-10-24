{//mapping album object to album info html via jQuery
$('#album-title').text(album.title);
$('img#album-cover-art').attr('src', album.albumArtUrl);
$('.artist').text(album.artist);
$('#release-info').text(album.releaseInfo);
}
