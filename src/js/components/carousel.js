const Hammer = require('hammerjs')

class Carousel{
  constructor(params) {
    this.index = 0

    this.$controls = document.querySelectorAll('.colors__controls')
    this.$images = document.querySelectorAll('.colors__imageContainer')
    this.$image = document.querySelector('.colors__images')
    this.$diamond = document.querySelector('.colors__diamond')
    this.$diamondText = document.querySelector('.colors__number')
    this.$texts = document.querySelectorAll('.colors__textContainer')
    this.$text = document.querySelectorAll('.colors__text')

    this.quantity = this.$images.length
    this.swiped = false

    this.colors = [
      '#FFFFFF',
      '#56FFA7',
      '#56F0FF',
      '#FF7029',
      '#FFD500'
    ]

    this.swipes = new Hammer(this.$image)

    this.swipes.on('panleft', e =>{
      if(this.index + 1 <= this.quantity - 1 && this.swiped == false){
        this.index++
        this.changeSlide()
      }
    })

    this.swipes.on('panright', e =>{
      if(this.index - 1 >= 0  && this.swiped == false){
        this.index--
        this.changeSlide()
      }
    })

    this.changeSlide()

    this.$controls.forEach((element, index) => {
      element.addEventListener('click', () => {
        this.index = index
        this.changeSlide()
      })
    })
  }
  changeSlide(){

    this.swiped = true

    document.querySelector('.colors__controls--active').classList.remove('colors__controls--active')
    this.$controls[this.index].classList.add('colors__controls--active')

    document.querySelector('.colors__imageContainer--active').classList.remove('colors__imageContainer--active')
    this.$images[this.index].classList.add('colors__imageContainer--active')

    this.$diamondText.innerHTML = this.index + 1

    document.querySelector('.colors__textContainer--active').classList.remove('colors__textContainer--active')
    this.$texts[this.index].classList.add('colors__textContainer--active')

    this.$text.forEach( element => {
      element.style.color = this.colors[this.index]
    })

    this.$diamond.style.borderColor = this.colors[this.index]

    window.setTimeout( () => {
      this.swiped = false
    }, 1500)
  }
}

module.exports = Carousel
