<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'
import NoSSR from 'vue-no-ssr'

if (process.BROWSER_BUILD) {
  var Motion = require('vue-motion').Motion
}

import styles from '~assets/index.css'
import Carousel from '~components/Carousel'
import CarouselItem from '~components/CarouselItem'

const list = [
  '/images/index/1.jpg',
  '/images/index/2.jpg',
  '/images/index/3.jpg'
]

@Component({
  watch: {
    '$route': 'route'
  }
})
export default class Index extends Vue {
  height = 400
  render () {
    return (
      <div class={ styles.index }>
        <NoSSR>
          <Motion
          value={ this.height }
          scopedSlots={
          {
            default: (props) => {
              const items = list.map(item => {
                return (
                  <CarouselItem>
                    <img style={{height: props.value + 'px'}} src={ item } />
                  </CarouselItem>
                )
              })
              return <Carousel>
                { items }
              </Carousel>
            }
          }}/>
        </NoSSR>
      </div>
    )
  }
  route () {
    setTimeout(_ => {
      this.height = 450
    }, 0)
  }
  created () {
    this.route()
  }
}
</script>
