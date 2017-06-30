import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/gallery.css'
import GalleryItem from './GalleryItem'

@Component({
  props: {
    list: {
      type: Array,
      default: _ => []
    }
  },
  watch: {
    centeredIndex (val) {
      let length = 0
      for (let i = 0; i < this.list.length; i++) {
        length += this.$refs[`item-${i}`].$el.offsetWidth
      }
      length = length - this.$refs.gallery.offsetWidth
      let translateX = 0
      for (let i = 0; i < val; i++) {
        translateX -= this.$refs[`item-${i}`].$el.offsetWidth
      }
      translateX = translateX + this.$refs.gallery.offsetWidth / 2 - this.$refs[`item-${val}`].$el.offsetWidth / 2
      if (translateX < -length) {
        this.translateX = -length
      } else if (translateX > 0) {
        this.translateX = 0
      } else {
        this.translateX = translateX
      }
    }
  }
})
export default class Gallery extends Vue {
  centeredIndex = 0
  translateX = 0
  pre () {
    if (this.centeredIndex === 0) {
      this.centeredIndex = this.list.length - 1
    } else {
      this.centeredIndex--
    }
  }
  next () {
    if (this.centeredIndex === this.list.length - 1) {
      this.centeredIndex = 0
    } else {
      this.centeredIndex++
    }
  }
  render () {
    const items = this.list.map((item, index) => {
      return (
        <GalleryItem
        ref={ `item-${index}` }
        translateX={ this.translateX }
        >
          <img src={ item } />
        </GalleryItem>
      )
    })
    return (
      <div ref="gallery" class={ styles.gallery }>
        { items }
        <div class={ styles.pre } on-click={ this.pre }>
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        <div class={ styles.next } on-click={ this.next }>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}
