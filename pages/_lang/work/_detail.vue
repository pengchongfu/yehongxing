<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/work.css'
import Gallery from '~components/Gallery'
import GalleryItem from '~components/GalleryItem'
import Modal from '~components/Modal'

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

import NoSSR from 'vue-no-ssr'
if (process.BROWSER_BUILD) {
  var Motion = require('vue-motion').Motion
}

@Component({
  watch: {
    currentIndex () {
      this.$nextTick(this.resize)
    }
  }
})
export default class Detail extends Vue {
  list = []
  currentIndex = 0
  height = 0
  width = 0
  visible = false
  resize () {
    const height = this.$refs.img.naturalHeight
    const width = this.$refs.img.naturalWidth
    if (height > width) {
      this.height = 500
      this.width = 500 * width / height
    } else {
      this.height = 500 * height / width
      this.width = 500
    }
  }
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
          <div class={ styles.currentImg }>
            <NoSSR>
              <Motion
              values={{
                height: this.height,
                width: this.width
              }}
              tag="div"
              scopedSlots={
              {
                default: (props) => {
                  return <div on-click={ _ => { this.visible = true } } style={{height: props.height + 'px', width: props.width + 'px'}} class={ styles.imgWrapper }>
                    <img style={{height: props.height + 'px', width: props.width + 'px'}} ref="img" src={ this.list[this.currentIndex] }/>
                  </div>
                }
              }}/>
            </NoSSR>
          </div>
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
  mounted () {
    this.$nextTick(this.resize)
  }
}
</script>
