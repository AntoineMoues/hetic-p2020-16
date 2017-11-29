import ScrollAppearing from './components/scrollappearing'
import Appear from './components/appear'
import Carousel from './components/carousel'
import Music from './components/music'
// import Rellax from 'rellax'
import Bodymovin from 'bodymovin'


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

/**
 * @const
 * @name audio
 * @instance Music
 */
const audio = new Music({
  link: '../../assets/sounds/background.mp3',
  $el: document.querySelector('.audio__button'),
  $icon: document.querySelector('.audio__icon')
})

/**
 * @const
 * @name loader
 */
const loader = Bodymovin.loadAnimation({
  container: document.querySelector('.loader'),
  renderer: 'svg',
  autoplay: true,
  path: '../../assets/data/loader.json'
})

window.onload = () => {
  setTimeout(() =>{
    document.querySelector('.loader').classList.add('removed')
    setTimeout(() => {
      document.querySelector('.loader').style.display = 'none'
    }, 2000)
  }, 2500)
}
