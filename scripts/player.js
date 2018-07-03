class Player {
  // 1st Method
  constructor () {
    this.currentlyPlaying = album.songs[0];
    this.playState = 'stopped';
    this.volume = 80;
    this.soundObject = new buzz.sound(this.currentlyPlaying.soundFileUrl);
  }
// 2nd Method
  getDuration() {
    return this.soundObject.getDuration();
  }
// 3rd Method
  getTime() {
    return this.soundObject.getTime();
  }
  // 4th Method
  playPause (song = this.currentlyPlaying) {
    if (this.currentlyPlaying !== song) {
      // Stop the currently playing sound file (even if nothing is playing)
      this.soundObject.stop();
      // Clear classes on the song that's currently playing
      this.currentlyPlaying.element.removeClass('playing paused');
      
      // Update our currentlyPlaying and playState properties
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
  // 5th Method
  skipTo (percent) {
    if (this.playState !== 'playing') { return }
    this.soundObject.setTime( (percent / 100) * this.soundObject.getDuration() );
  }
  // 6th Method
  setVolume (percent) {
    this.volume = percent;
    this.soundObject.setVolume(percent);
  }
}

const player = new Player();

