class Appear{
  constructor(params) {
    window.addEventListener('scroll', () => {
      if(params.$container.getBoundingClientRect().y < 70 && params.$container.getBoundingClientRect().y > - params.$container.getBoundingClientRect().height){
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
