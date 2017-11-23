/**
 * Class allowing appering and disappearing on elements
 * @class
 */
class Appear{

  /**
   * @constructor
   * Listening to scroll, launches class adds.
   * @param {object} params - Contains 3 parameters : $container, {element}, container to observ ; $animate, {element}, element to animate ; animation, {string}, name of the class to add on trigger
   */
  constructor (params) {
    window.addEventListener('scroll', () => {
      if (params.$container.getBoundingClientRect().y < 70 && params.$container.getBoundingClientRect().y > - params.$container.getBoundingClientRect().height) {
        params.$animate.forEach( element => {
          element.classList.add(params.animation)
        })
      }
      else{
        params.$animate.forEach( element => {
          element.classList.remove(params.animation)
        })
      }
    })
  }
}

module.exports = Appear
