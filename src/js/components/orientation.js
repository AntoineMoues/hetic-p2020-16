/**
 * Class mesuring mobile orientation to modify divs
 * @class
 */
class Orientation {

  /**
   * @constructor
   * Listening to orientation class
   * @param {object} params - Contains 1 parameter : $element, {element}, element to modify
   */
  constructor(params) {
    this.$element = params.$element
    window.addEventListener('deviceorientation', (e) => {
      this.$element.style.transform = `rotate3d(${e.gamma}, ${e.beta}, ${e.alpha}, 30deg)`
    }, false)
  }
}

module.exports = Orientation
