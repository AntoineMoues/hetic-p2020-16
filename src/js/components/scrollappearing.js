/**
 * When element with a specific CSS class is visible in window, give it a new CSS class
 * @class
 */
class ScrollAppearing {

  /**
   * @constructor
   * Declares all parameters. Inits system.
   * @param {object} params - Contains 2 parameters
   * @param {string} hidden - CSS class which will be removed
   * @param {string} appeared - CSS which will be added
   */
  constructor (params) {
    this.params = params
    this.$elements = new Object()
    this.refreshProperties()
    this.init()
    window.setInterval(() => {
      this.init()
    }, 500)
  }

  /**
   * Listen to scroll event, and refresh elements
   * @function
   * @name init
   */
  init() {
    this.refreshProperties()
    window.addEventListener('scroll', this.check())
  }

  /**
   * Update hidden elements list, and window height
   * @function
   * @name refreshProperties
   */
  refreshProperties() {
    this.$elements.hidden = document.querySelectorAll(`.${this.params.hidden}`)
    this.height = window.innerHeight
  }

  /**
   * If an element is visible, replace hidden CSS class by appeared CSS class
   * @function
   * @name check
   */
  check() {
    this.$elements.hidden.forEach( element => {
      let tempos = element.getBoundingClientRect().top
      if (tempos - this.height <= 0)
        element.className = element.className.replace(this.params.hidden, this.params.appeared)
    })
  }
}

module.exports = ScrollAppearing
