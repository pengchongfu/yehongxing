import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/imagegallery.css'

import NoSSR from 'vue-no-ssr'
if (process.BROWSER_BUILD) {
  var Motion = require('vue-motion').Motion
}

@Component({
  props: {
    currentIndex: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: _ => []
    },
    h: {
      type: Number,
      default: 500
    }
  },
  watch: {
    currentIndex (val) {
      this.resize()
    }
  }
})
export default class Detail extends Vue {
  imgs = []
  height = 0
  width = 0
  offset = 0
  resize () {
    if (this.imgs.length === 0) {
      return
    }
    let offset = 0
    let height = 0
    let width = 0
    let properHeight = 0
    for (let i = 0; i < this.currentIndex; i++) {
      offset += this.imgs[i].naturalWidth * this.h / this.imgs[i].naturalHeight
    }
    this.offset = -offset

    height = this.imgs[this.currentIndex].naturalHeight
    width = this.imgs[this.currentIndex].naturalWidth
    properHeight = height
    while (properHeight >= this.h) {
      properHeight -= this.h / 2
    }
    properHeight -= Math.random() * 50
    this.height = properHeight
    this.width = width * properHeight / height
  }
  render () {
    const imgs = this.list.map((item, index) => {
      return (
        <img src={ item } class={ styles.imgItem } style={ this.currentIndex === index ? {height: this.height + 'px', width: this.width + 'px'} : null }/>
      )
    })
    return (
      <NoSSR>
        <Motion
        style={{height: this.h + 'px'}}
        class={ styles.imgContainer }
        values={{
          height: this.height,
          width: this.width,
          translateX: this.offset
        }}
        tag="div"
        scopedSlots={
        {
          default: (props) => {
            return <div on-click={ _ => { this.$emit('click') } } style={{height: props.height + 'px', width: props.width + 'px'}} class={ styles.imgWrapper }>
              <div style={ `height: ${this.h}px; transform: translateX(${props.translateX}px)` } ref="imgs" class={ styles.imgs }>
              { imgs }
              </div>
            </div>
          }
        }}/>
      </NoSSR>
    )
  }
  mounted () {
    this.$nextTick(_ => {
      this.imgs = this.$refs.imgs.children
      this.resize()
    })
  }
}
