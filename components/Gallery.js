import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/gallery.css'

@Component({
  props: {
    height: {
      type: Number,
      default: 450
    },
    size: {
      type: String,
      default: 'large'
    }
  },
  watch: {
    centeredIndex (val) {
      let length = 0
      for (let i = 0; i < this.items.length; i++) {
        length += this.items[i].$el.offsetWidth
      }
      length = length - this.$refs.gallery.offsetWidth
      let translateX = 0
      for (let i = 0; i < val; i++) {
        translateX -= this.items[i].$el.offsetWidth
      }
      translateX = translateX + this.$refs.gallery.offsetWidth / 2 - this.items[val].$el.offsetWidth / 2
      if (translateX < -length) {
        this.translateX = -length
      } else if (translateX > 0) {
        this.translateX = 0
      } else {
        this.translateX = translateX
      }
      this.anime()
      this.$emit('change', val)
    }
  }
})
export default class Gallery extends Vue {
  centeredIndex = 0
  translateX = 0
  items = []
  pre () {
    if (this.centeredIndex === 0) {
      this.centeredIndex = this.items.length - 1
    } else {
      this.centeredIndex--
    }
  }
  next () {
    if (this.centeredIndex === this.items.length - 1) {
      this.centeredIndex = 0
    } else {
      this.centeredIndex++
    }
  }
  anime () {
    this.items.forEach((item) => {
      item.translateX = this.translateX
    })
  }
  render () {
    return (
      <div ref="gallery" class={ styles.gallery } style={ `height: ${this.height}px` }>
        { this.$slots.default }
        <div class={ styles.pre } on-click={ this.pre }>
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        <div class={ styles.next } on-click={ this.next }>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
  mounted () {
    this.items = this.$children.filter(child => child.$options.name === 'GalleyItem')
    this.anime()
  }
}
