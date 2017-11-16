class Carousel{
  constructor(params) {
    this.index = 0

    this.$controls = document.querySelectorAll('.colors__control')
    this.$images = document.querySelectorAll('.colors__imageContainer')
    this.$diamond = document.querySelector('.colors__diamond')
    this.$diamondText = document.querySelector('.colors__diamond p')
    this.$texts = document.querySelectorAll('.colors__textContainer')

    this.colors = [
      '#FFFFFF',
      '#56FFA7',
      '#56F0FF',
      '#FF7029',
      'FFD500'
    ]

    this.changeSlide()
  }
  changeSlide(){
    document.querySelector('.colors__control--active').classList.remove('colors__control--active')
    this.$controls[this.index].classList.add('colors__control--active')

    document.querySelector('.colors__imageContainer--active').classList.remove('colors__imageContainer--active')
    this.$images[this.index].classList.add('colors__imageContainer--active')

    this.$diamondText = this.index + 1

    document.querySelector('.colors__textContainer--active').classList.remove('colors__textContainer--active')
    this.$texts[this.index].classList.add('colors__textContainer--active')

    this.$diamond.style.borderColor = this.colors[this.index]
  }
}

module.exports = Carousel
