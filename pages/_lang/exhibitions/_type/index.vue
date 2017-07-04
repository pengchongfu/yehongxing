<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/exhibitions.css'
import data from '~data/exhibitions.js'

@Component
export default class Exhibitions extends Vue {
  data () {
    return {
      list: data[this.$route.params.type]
    }
  }
  render () {
    const items = this.list.map(item => {
      return (
        <div class={ styles.item }>
          <div class={ styles.itemContent }>
            <img class={ styles.itemImg } src={ item.img }/>
            <div class={ styles.itemText }>
              <div class={ styles.itemName }>{ item.name }</div>
              <div class={ styles.itemTime }>{ item.time }</div>
            </div>
            <div class={ styles.itemNext }>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div class={ styles.exhibitions }>
        <div class="container">
          { this.num }
          { items }
        </div>
      </div>
    )
  }
}
</script>
