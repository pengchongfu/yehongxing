import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/gallery.css'

@Component({
  props: {
    translateX: {
      type: Number
    }
  }
})
export default class GalleyItem extends Vue {
  render () {
    return (
      <div class={ styles.item } style={{transform: `translateX(${this.translateX}px)`}}>
        { this.$slots.default }
      </div>
    )
  }
}
