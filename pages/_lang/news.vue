<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/news.css'

const imgs = [
  '/images/news/01.jpg',
  '/images/news/02.jpg',
  '/images/news/03.jpg',
  '/images/news/04.jpg',
  '/images/news/05.jpg',
  '/images/news/06.jpg',
  '/images/news/07.jpg',
  '/images/news/08.jpg',
  '/images/news/09.jpg',
  '/images/news/10.jpg'
]

@Component
export default class News extends Vue {
  render () {
    const length = imgs.length
    const items = imgs.map((item, index) => {
      return (
        <div class={ styles.item }>
          <img src={ item } />
          { index === length - 1 ? null : <div class={ styles.line }></div> }
        </div>
      )
    })
    return (
      <div class={ styles.news }>
        {items}
      </div>
    )
  }
}
</script>
