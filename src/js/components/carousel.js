/**
 * This class requires the modules hammerjs
 * @const
 * @requires hammerjs
 */
const Hammer = require('hammerjs')

/**
 * Carousel class
 * @class
 */
class Carousel {

  /**
   * Declares all parameters. Listen to clicks and hammer pans.
   * @constructor
   * @param {object} params - Contains 1 parameter : $container, {element}, container to observ
   */
  constructor (params) {
    this.index = 0

    this.$container = params.$container
    this.$controls = document.querySelectorAll('.colors__controls')
    this.$images = document.querySelectorAll('.colors__imageContainer')
    this.$image = document.querySelector('.colors__images')
    this.$diamond = document.querySelector('.colors__diamond')
    this.$diamondText = document.querySelector('.colors__number')
    this.$texts = document.querySelectorAll('.colors__textContainer')
    this.$text = document.querySelectorAll('.colors__text')
    this.$backgroundDivs = document.querySelectorAll('.background div:not(.background__circle)')
    this.$circles = document.querySelectorAll('.background__circle')

    this.quantity = this.$images.length
    this.swiped = false

    this.colors = [
      '#FFFFFF',
      '#56FFA7',
      '#56F0FF',
      '#FF7029',
      '#FFD500'
    ]

    this.backgroundColors = [
      '#595959',
      '#244028',
      '#243540',
      '#402B24',
      '#403B24'
    ]

    this.swipes = new Hammer(this.$image)

    this.swipes.on('panleft', e =>{
      if (this.index + 1 <= this.quantity - 1 && this.swiped == false) {
        this.index++
        this.changeSlide()
      }
    })

    this.swipes.on('panright', e =>{
      if (this.index - 1 >= 0  && this.swiped == false) {
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

    window.addEventListener('scroll', () => {
      this.check()
    })
  }

  /**
   * Launches every event needed when carousel is moving
   * @function
   * @name changeSlide
   */
  changeSlide() {
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

    this.check()

    this.$diamond.style.borderColor = this.colors[this.index]

    window.setTimeout( () => {
      this.swiped = false
    }, 1500)
  }

  /**
   * When container is visible change background color
   * @function
   * @name check
   */
  check() {
    if (this.$container.getBoundingClientRect().y < 190 && this.$container.getBoundingClientRect().y > - this.$container.getBoundingClientRect().height + 300) {
      this.$backgroundDivs.forEach( element => {
        element.style.backgroundColor = this.backgroundColors[this.index]
      })
      this.$circles.forEach( element => {
        element.style.borderColor = this.backgroundColors[this.index]
      })
    }
    else {
      this.$backgroundDivs.forEach( element => {
        element.style.backgroundColor = '#403524'
      })
      this.$circles.forEach( element => {
        element.style.borderColor = '#403524'
      })
    }
  }
}

module.exports = Carousel
