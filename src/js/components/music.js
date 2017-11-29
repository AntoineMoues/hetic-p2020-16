/**
 * This class plays music
 * @class
 */
class Music {

  /**
   * Declares all parameters. create audio object and listen to button mute.
   * @constructor
   * @param {object} params - Contains 3 parameters
   * @param {string} link - link to the audio
   * @param {element} $el - element which contains mute button
   * @param {element} $icon - element which contains icon
   */
  constructor(params){

    this.audio = new Audio(params.link)
    this.audio.autoplay = true

    this.params = params

    if(localStorage.getItem('audio') !== null) {
      this.state = JSON.parse(localStorage.getItem('audio'))
      this.state = this.state ? this.state = false : this.state = true
    } else {
      this.state = true
      localStorage.setItem('audio', this.state)
    }

    this.mute()

    params.$el.addEventListener('click', () => {
      this.mute()
    })

  }

  /**
   * Do action needed when mute or unmute is needed
   * @function
   * @name mute
   */
  mute() {
    if(this.state == true){
      this.params.$icon.src = 'assets/img/cross.png'
      this.audio.pause()
      this.audio.volume = 0
      this.state = false
      localStorage.setItem('audio', this.state)
    } else {
      this.params.$icon.src = 'assets/img/sound.gif'
      this.audio.play()
      this.audio.volume = 1
      this.state = true
      localStorage.setItem('audio', this.state)
    }
  }
}

module.exports = Music
