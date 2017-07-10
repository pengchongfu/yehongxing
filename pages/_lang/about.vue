<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/about.css'

@Component
export default class About extends Vue {
  render () {
    return (
      <div class={ styles.about }>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <img class={ styles.img } src="/images/about/about.jpg" />
            </div>
            <div class="offset-1"></div>
            <div class="col-md-6">
              <div class={ styles.name }>{ this.$t('about.name') }</div>
              <p>{ this.$t('about.description') }</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
</script>
