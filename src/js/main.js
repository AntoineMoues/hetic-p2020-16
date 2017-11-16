const ScrollAppearing = require('./components/scrollappearing')
const Appear = require('./components/appear')

const animation = new ScrollAppearing({
  hidden : 'hidden',
  appeared : 'appeared'
})

const appearing = new Appear({
  $container : document.querySelector('.box'),
  $animate : document.querySelectorAll('.background__circle'),
  animation : 'opacity'
})
