import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/carousel.css'

@Component
export default class CarouselItem extends Vue {
  translateX = 0
  zIndex = 0
  translateItem (index, activeIndex) {
    const offsetWidth = this.$parent.$el.offsetWidth
    const length = this.$parent.items.length
    const n = (index - activeIndex + length + 1) % length - 1
    this.translateX = n * offsetWidth
    if (n === -1 || n === 0) {
      this.zIndex = n + 2
    } else {
      this.zIndex = 0
    }
  }
  render () {
    return (
      <div class={ styles.item } style={{transform: `translateX(${this.translateX}px)`, zIndex: this.zIndex}}>
        { this.$slots.default }
      </div>
    )
  }
}
