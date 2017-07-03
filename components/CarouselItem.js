import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/carousel.css'

@Component({
  name: 'CarouselItem'
})
export default class CarouselItem extends Vue {
  n = 0
  translateX = 0
  zIndex = 0
  translateItem (index, activeIndex) {
    const offsetWidth = this.$parent.$el.offsetWidth
    const length = this.$parent.items.length
    const n = (index - activeIndex + length + 1) % length - 1
    if (n === -1) {
      if (this.n === 0) {
        this.zIndex = 2
      } else {
        this.zIndex = 1
      }
    } else if (n === 0) {
      this.zIndex = 3
    } else if (n === 1) {
      if (this.n === 0) {
        this.zIndex = 2
      } else {
        this.zIndex = 1
      }
    } else {
      this.zIndex = 0
    }
    this.n = n
    this.translateX = n * offsetWidth
  }
  render () {
    return (
      <div class={ styles.item } style={{transform: `translateX(${this.translateX}px)`, zIndex: this.zIndex}}>
        { this.$slots.default }
      </div>
    )
  }
}
