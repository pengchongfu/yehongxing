import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/footer.css'

@Component
export default class Footer extends Vue {
  render () {
    return (
      <footer class={ styles.footer }>
        <div class="container">
          <div class={ styles.copyright }>
            ©2017 { this.$t('about.name') }
          </div>
          <div class={ styles.icons }>
            <a href="mailto:yehongxing2013@163.com"><i class={ `fa fa-envelope ${styles.icon}` } aria-hidden="true"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100004118880593" target="_blank"><i class={ `fa fa-facebook ${styles.icon}` } aria-hidden="true"></i></a>
          </div>
        </div>
      </footer>
    )
  }
}
