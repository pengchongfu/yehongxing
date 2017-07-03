import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/gallery.css'

@Component({
  name: 'GalleyItem'
})
export default class GalleyItem extends Vue {
  translateX = 0
  handleClick () {
    const parent = this.$parent
    const index = parent.items.indexOf(this)
    parent.centeredIndex = index
  }
  get centered () {
    if (this.$parent.size === 'large') {
      return false
    }
    return this.$parent.items.indexOf(this) === this.$parent.centeredIndex
  }
  render () {
    return (
      <div
      class={ `${styles.item} ${this.centered ? styles.centered : ''}` }
      style={{transform: `translateX(${this.translateX}px)`}}
      on-click={ this.handleClick }
      >
        { this.$slots.default }
      </div>
    )
  }
}
