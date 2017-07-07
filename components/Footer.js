import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/footer.css'

@Component
export default class Footer extends Vue {
  render () {
    return (
      <div class={ styles.footer }>
        <div class="container">
          <div class={ styles.copyright }>
            ©2017 { this.$t('about.name') }
          </div>
          <div class={ styles.icons }>
            <i class={ `fa fa-facebook ${styles.icon}` } aria-hidden="true"></i>
            <i class={ `fa fa-twitter ${styles.icon}` } aria-hidden="true"></i>
          </div>
        </div>
      </div>
    )
  }
}
