<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/work.css'

@Component
export default class Work extends Vue {
  render () {
    return (
      <div class={ styles.work }>
        <div class="container">
          <div class={ styles.item }>
            <nuxt-link to={ `/${this.$i18n.locale}/work/sculpture` }>
              <div class={ styles.sculpture }></div>
              <div class={ styles.info }>雕塑</div>
            </nuxt-link>
          </div>
          <div class={ styles.item }>
            <nuxt-link to={ `/${this.$i18n.locale}/work/oil` }>
              <div class={ styles.oil }></div>
              <div class={ styles.info }>油画</div>
            </nuxt-link>
          </div>
        </div>
      </div>
    )
  }
}
</script>
