const Hammer = require('hammerjs')

class Box{
  constructor(params){
    this.$elements = new Object()
    this.$elements.$container = params.$el
    this.$elements.$scrollListener = this.$elements.$container.querySelector('.home-slider__scroll')

    this.opened = false

    this.swipes = new Hammer(this.$elements.$scrollListener)

    this.swipes.get('pan').set({direction: Hammer.DIRECTION_ALL})

    this.swipes.on('panup', e => {
      this.openBox()
    })
  }
  openBox(){

    if(this.opened == false){
      this.opened = true
    }

  }
}
module.exports = Box
