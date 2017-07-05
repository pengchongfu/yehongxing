let domListener
const handlerArray = []

export default {
  bind (el, binding) {
    if (!domListener) {
      domListener = document.documentElement.addEventListener('click', event => {
        handlerArray.forEach(handler => {
          handler.check(event)
        })
      }, false)
    }
    const { value: callback } = binding
    handlerArray.push({
      el,
      check (event) {
        if (!el.contains(event.target)) {
          callback()
        }
      }
    })
  },
  unbind (el) {
    for (let i = 0; i < handlerArray.length; i++) {
      if (handlerArray[i].el === el) {
        handlerArray.splice(i, 1)
        break
      }
    }
  }
}
