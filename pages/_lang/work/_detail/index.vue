<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/work.css'
import Gallery from '~components/Gallery'
import GalleryItem from '~components/GalleryItem'

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
                  return <div style={{height: props.height + 'px', width: props.width + 'px'}} class={ styles.imgWrapper }>
                    <img style={{height: props.height + 'px', width: props.width + 'px'}} ref="img" src={ this.list[this.currentIndex] }/>
                  </div>
                }
              }}/>
            </NoSSR>
          </div>
          <Gallery height={ 100 } size="small" on-change={ val => { this.currentIndex = val } }>
          { items }
          </Gallery>
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
