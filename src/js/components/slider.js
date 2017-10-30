const Hammer = require('hammerjs')

class Slider{
  constructor(params){
    this.$elements = new Object()
    this.$elements.$container = params.$el
    this.$elements.$slideContainer = this.$elements.$container.querySelector('.home-slider__slides')
    this.$elements.$controls = this.$elements.$container.querySelectorAll('.home-slider__control')
    this.$elements.$slides = this.$elements.$container.querySelectorAll('.home-slider__slide')

    this.classes = new Object()
    this.classes.controlActive = 'home-slider__control-active'
    this.classes.slideActive = 'home-slider__slide-active'

    this.index = 0
    this.quantities = this.$elements.$controls.length - 1
    this.swiped = false

    let slideSwipes = new Hammer(this.$elements.$slideContainer)

    slideSwipes.on('panleft', e => {
      if(this.index - 1 >= 0  && this.swiped == false)
        this.goToSlide(this.index--)
    })

    slideSwipes.on('panright', e => {
      if(this.index + 1 <= this.quantities && this.swiped == false)
        this.goToSlide(this.index++)
    })
  }
  goToSlide(index){
    if(this.swiped == false){
      this.resetSwiped()
      this.change(this.$elements.$controls, this.classes.controlActive)
      this.change(this.$elements.$slides, this.classes.slideActive)
    }
  }
  change(array, cssClass){
    array.forEach( element => {
      element.classList.remove(cssClass)
    })
    array[this.index].classList.add(cssClass)
  }
  resetSwiped(){
    this.swiped = true
    setTimeout( () => {
      this.swiped = false
    }, 1000)
  }
}

module.exports = Slider
