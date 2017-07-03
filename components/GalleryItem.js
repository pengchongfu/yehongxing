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
  render () {
    return (
      <div
      class={ styles.item }
      style={{transform: `translateX(${this.translateX}px)`}}
      on-click={ this.handleClick }
      >
        { this.$slots.default }
      </div>
    )
  }
}
