<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/studio.css'
import Gallery from '~components/Gallery'
import GalleryItem from '~components/GalleryItem'

const list = [
  '/images/studio/1.jpg',
  '/images/studio/2.jpg',
  '/images/studio/1.jpg',
  '/images/studio/2.jpg'
]

@Component
export default class Studio extends Vue {
  render () {
    const items = list.map(item => {
      return (
        <GalleryItem
        >
          <img src={ item } />
        </GalleryItem>
      )
    })
    return (
      <div class={ styles.studio }>
        <Gallery>
        { items }
        </Gallery>
      </div>
    )
  }
}
</script>
