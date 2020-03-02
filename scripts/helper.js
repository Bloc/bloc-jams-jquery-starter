export class Helper(){

class Helper{
  constructor(song){
    this.song = song;
  }
  playPauseAndUpdate(song){
    player.playPause(song);
  }
}

var helper = new Helper(song);
}
