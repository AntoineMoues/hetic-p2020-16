// const Slider = require('./components/slider')
// const Box = require('./components/box')
//
// let homeSlider = new Object()
//
// homeSlider.$el= document.querySelector('.home-slider'),
// homeSlider.object = new Slider({
//   $el: homeSlider.$el
// })
//
// let boxSlider = new Object()
//
// boxSlider.$el = document.querySelector('.home-slider'),
// homeSlider.object = new Box({
//   $el: boxSlider.$el
// })

const ScrollAppearing = require('./components/scrollappearing')

const animation = new ScrollAppearing({
  hidden : 'hidden',
  appeared : 'appeared'
})
