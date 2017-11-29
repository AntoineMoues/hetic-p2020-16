/**
 * Class allowing appearing and disappearing on elements
 * @class
 */
class Appear{

  /**
   * @constructor
   * Listening to scroll, launches class adds.
   * @param {object} params - Contains 3 parameters
   * @param {element} $container - container to observ
   * @param {element} $animate - element to animate
   * @param {string} animation - name of the class to add on trigger
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
