const Hammer = require('hammerjs')

class Box{
  constructor(params){
    this.$elements = new Object()
    this.$elements.$container = params.$el
    this.$elements.$scrollListener = this.$elements.$container.querySelector('.home-slider__scroll')
    this.$elements.$box = this.$elements.$container.querySelector('.home-slider__content')
    this.$elements.$close = this.$elements.$container.querySelector('.home-slider__content .box__title span')

    this.classes = new Object()
    this.classes.boxActive = 'home-slider__content-active'

    this.opened = false

    this.swipes = new Hammer(this.$elements.$scrollListener)
    this.swipes.get('pan').set({direction: Hammer.DIRECTION_ALL})

    this.swipes.on('panup', e => {
      this.openBox()
    })

    this.$elements.$close.addEventListener('click', () => {
      this.closeBox()
    })
  }
  openBox(){

    if(this.opened == false){
      this.opened = true
      this.boxIndex = -50
      this.$elements.$box.classList.add(this.classes.boxActive)

      this.boxMove()

      this.boxSwipes = new Hammer(this.$elements.$box)
      this.boxSwipes.get('pan').set({direction: Hammer.DIRECTION_ALL})

      this.boxSwipes.on('panup pandown', e => {
        if(e.type == 'panup')
          this.boxUp()
        else if(e.type == 'pandown')
          this.boxDown()
      })
    }

  }
  closeBox(){

    if(this.opened){
      this.opened = false
      this.$elements.$box.classList.remove(this.classes.boxActive)
      this.$elements.$box.style.transform = 'translateY(0)'
    }

  }
  boxUp(){
    this.boxIndex--
    if (this.boxIndex < -100)
      this.boxIndex = -100
    this.boxMove()
  }
  boxDown(){
    this.boxIndex++
    this.boxMove()
  }
  boxMove(){
    this.$elements.$box.style.transform = `translateY(${this.boxIndex}%)`
  }
}
module.exports = Box
