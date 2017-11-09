class ScrollAppearing{
  constructor(params){
    this.params = params
    this.$elements = new Object()
    this.refreshProperties()
    this.init()
    window.setInterval(() => {
      this.init()
    }, 500)
  }
  init(){
    this.refreshProperties()
    window.addEventListener('scroll', this.check())
  }
  refreshProperties(){
    this.$elements.hidden = document.querySelectorAll(`.${this.params.hidden}`)
    this.height = window.innerHeight
  }
  check(){
    this.$elements.hidden.forEach( element => {
      let tempos = element.getBoundingClientRect().top
      if(tempos - this.height <= 0)
        element.className = element.className.replace(this.params.hidden, this.params.appeared)
    })
  }
}

module.exports = ScrollAppearing
