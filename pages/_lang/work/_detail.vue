<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/work.css'
import Gallery from '~components/Gallery'
import GalleryItem from '~components/GalleryItem'
import Modal from '~components/Modal'
import ImageGallery from '~components/ImageGallery'

const listMap = {
  oil: [
    '1.jpg',
    '2.jpg'
  ],
  sculpture: [
    '1.jpg',
    '2.jpg',
    '1.jpg',
    '2.jpg',
    '1.jpg',
    '2.jpg',
    '1.jpg',
    '2.jpg',
    '1.jpg',
    '2.jpg',
    '1.jpg',
    '2.jpg'
  ]
}

@Component
export default class Detail extends Vue {
  list = []
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
  render () {
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
          <ImageGallery currentIndex={ this.currentIndex } list={ this.list } on-click={ _ => { this.visible = true } } />
          <Gallery height={ 100 } size="small" on-change={ val => { this.currentIndex = val } } parentIndex={ this.currentIndex }>
          { items }
          </Gallery>
          {
            this.visible ? <Modal on-change={ this.handleModal }>
              <div class={ styles.slider }>
                <img src={ this.list[this.currentIndex] } />
                <div class={ styles.pre } on-click={ this.pre }>
                  <i class="fa fa-angle-left" aria-hidden="true"></i>
                </div>
                <div class={ styles.next } on-click={ this.next }>
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
              </div>
            </Modal> : null
          }
        </div>
      </div>
    )
  }
  created () {
    this.list = listMap[this.$route.params.detail].map(item => {
      return `/images/work/${this.$route.params.detail}/${item}`
    })
  }
}
</script>
