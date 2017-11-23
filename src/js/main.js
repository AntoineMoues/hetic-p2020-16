const ScrollAppearing = require('./components/scrollappearing')
const Appear = require('./components/appear')
const Carousel = require('./components/carousel')
const Orientation = require('./components/orientation')


/**
 * @const
 * @name animation
 * @instance ScrollAppearing
 */
const animation = new ScrollAppearing({
  hidden : 'hidden',
  appeared : 'appeared'
})

/**
 * @const
 * @name appearing
 * @instance Appear
 */
const appearing = new Appear({
  $container : document.querySelector('.box'),
  $animate : document.querySelectorAll('.background__circle'),
  animation : 'opacity'
})


/**
 * @const
 * @name slider
 * @instance Carousel
 */
const slider = new Carousel({
  $container : document.querySelector('.colors')
})


if (window.DeviceOrientationEvent) {
  /**
   * @const
   * @name moving
   * @instance Orientation
   */
  const moving = new Orientation({
    $element : document.querySelector('.push__image')
  })
}
