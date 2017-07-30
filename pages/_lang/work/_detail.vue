<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/work.css'
import Gallery from '~components/Gallery'
import GalleryItem from '~components/GalleryItem'
import ImageModal from '~components/ImageModal'
import ImageGallery from '~components/ImageGallery'

import listMap from '~data/work.js'

@Component
export default class Detail extends Vue {
  asyncData ({params}) {
    return {
      list: listMap[params.detail].map(item => {
        return `/images/work/${params.detail}/${item}`
      })
    }
  }
  currentIndex = 0
  visible = false
  handleModal (val) {
    switch (val) {
      case 'close':
        this.visible = false
        break
    }
  }
  pre () {
    if (this.currentIndex === 0) {
      this.currentIndex = this.list.length - 1
    } else {
      this.currentIndex--
    }
  }
  next () {
    if (this.currentIndex === this.list.length - 1) {
      this.currentIndex = 0
    } else {
      this.currentIndex++
    }
  }
  r (vnode) {
    const items = this.list.map((item, index) => {
      return (
        <GalleryItem
        >
          <img src={ item } />
        </GalleryItem>
      )
    })
    return (
      <div class={ styles.detail }>
        <div class="container">
          { vnode }
          <ImageGallery currentIndex={ this.currentIndex } list={ this.list } on-click={ _ => { this.visible = true } } />
          <Gallery height={ 100 } size="small" on-change={ val => { this.currentIndex = val } } parentIndex={ this.currentIndex }>
          { items }
          </Gallery>
          {
            this.visible ? <ImageModal
              src={ this.list[this.currentIndex] }
              on-pre={ this.pre }
              on-next={ this.next }
              on-change={ this.handleModal }
            /> : null
          }
        </div>
      </div>
    )
  }
  render () {
    return this.r()
  }
}
</script>
