const Slider = require('./components/slider')

let homeSlider = new Object()

homeSlider.$el= document.querySelector('.home-slider'),
homeSlider.object = new Slider({
  $el: homeSlider.$el
})
