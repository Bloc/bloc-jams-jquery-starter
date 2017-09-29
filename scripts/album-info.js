$( document ).ready(function () {
	$("#album-title").text(album.title);
	$("img#album-cover-art").attr("src", album.albumArtUrl);
});