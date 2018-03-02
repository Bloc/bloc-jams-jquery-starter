class Player {
  constructor () {
    this.currentlyPlaying = album.songs[0];
    this.playState = 'stopped';
    this.volume = 80;
    this.soundObject = new buzz.sound(this.currentlyPlaying.soundFileUrl);
  }

  getDuration() {
    return this.soundObject.getDuration();
  }

  getTime() {
    return this.soundObject.getTime();
  }
  
  playPause (song = this.currentlyPlaying) {
    if (this.currentlyPlaying !== song) {
      $('audio').each(function(){
        this.pause(); //stop playing
      });
     
      this.soundObject.stop();
      this.removeClass();
      
      this.currentlyPlaying.element.removeClass('playing paused');
      
      this.currentlyPlaying.play();
      this.playState.pause();
      this.currentlyPlaying = song;
      this.playState = 'stopped';
      this.soundObject = new buzz.sound(this.currentlyPlaying.soundFileUrl);
    }
    if (this.playState === 'paused' || this.playState === 'stopped') {
      this.soundObject.setVolume( this.volume );
      this.soundObject.play();
      this.playState = 'playing';
      this.currentlyPlaying.element.removeClass('paused').addClass('playing');
    } else {
      this.soundObject.pause();
      this.playState = 'paused';
      this.currentlyPlaying.element.removeClass('playing').addClass('paused');
    }
  }
  
  skipTo (percent) {
    if (this.playState !== 'playing') { return }
    this.soundObject.setTime( (percent / 100) * this.soundObject.getDuration() );
  }
  
  setVolume (percent) {
    this.volume = percent;
    this.soundObject.setVolume(percent);
  }
}

const player = new Player();

