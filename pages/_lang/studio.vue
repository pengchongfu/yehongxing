<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/studio.css'

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
        <div class={ styles.item }>
          <img src={ item } class={ styles.img }/>
        </div>
      )
    })
    return (
      <div class={ styles.studio }>
        { items }
      </div>
    )
  }
}
</script>
