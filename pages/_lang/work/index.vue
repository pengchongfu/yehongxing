<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/work.css'
import work from '~data/work.js'

@Component
export default class Work extends Vue {
  render () {
    const items = Object.keys(work).map(item => {
      return (
        <div class={ styles.item }>
          <nuxt-link to={ `/${this.$i18n.locale}/work/${item}` }>
            <div class={ styles[item] }></div>
            <div class={ styles.info }>{ this.$t(`work.${item}`) }</div>
          </nuxt-link>
        </div>
      )
    })
    return (
      <div class={ styles.work }>
        <div class="container">
          { items }
        </div>
      </div>
    )
  }
}
</script>
