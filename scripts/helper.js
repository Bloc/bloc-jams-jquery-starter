export class Helper{

  constructor(song){
    this.song = song;
  }
  playPauseAndUpdate(song){
    player.playPause(song);
  }
}
