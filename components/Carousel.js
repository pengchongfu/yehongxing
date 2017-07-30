import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/carousel.css'

@Component({
  watch: {
    activeIndex (val) {
      this.anime()
    }
  }
})
export default class Carousel extends Vue {
  items = []
  activeIndex = 0
  timer = null
  hover = false
  anime () {
    this.items.forEach((item, index) => {
      item.translateItem(index, this.activeIndex)
    })
  }
  start () {
    this.timer = setInterval(_ => {
      this.activeIndex = (this.activeIndex + 1) % this.items.length
    }, 5000)
  }
  pause () {
    clearInterval(this.timer)
  }
  pre (e) {
    e.stopPropagation()
    this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length
  }
  next (e) {
    e.stopPropagation()
    this.activeIndex = (this.activeIndex + 1) % this.items.length
  }
  hoverEnter () {
    this.hover = true
    this.pause()
  }
  hoverLeave () {
    this.hover = false
    this.start()
  }
  render () {
    const indicators = <ul class={ styles.indicators }>
      {
        this.items.map((item, index) => {
          return <li class={ `${styles.indicator}${this.activeIndex === index ? ' active' : ''}` }><div on-mouseenter={ _ => { this.activeIndex = index } }></div></li>
        })
      }
    </ul>
    return (
      <div class={ styles.carousel } on-mouseenter={ this.hoverEnter } on-mouseleave={ this.hoverLeave }>
        <div class={ styles.container } on-click={ this.next }>
          { this.$slots.default }
          <div class={ `${styles.pre}${this.hover ? ' hover' : ''}` } on-click={ this.pre }>
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          <div class={ `${styles.next}${this.hover ? ' hover' : ''}` } on-click={ this.next }>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
        { indicators }
      </div>
    )
  }
  mounted () {
    this.items = this.$children.filter(child => child.$options.name === 'CarouselItem')
    this.anime()
    this.start()
  }
  beforeDestroy () {
    this.pause()
  }
}
