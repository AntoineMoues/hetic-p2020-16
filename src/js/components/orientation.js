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
    this.$element = params.$container
    window.addEventListener('deviceorientation', this.move(), false)
  }

  move(e) {
    console.log(e)
    this.$element.style.transform = `translate(${e.gamma/10}, ${e.beta/10})`
  }
}

module.exports = Orientation
