<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/notfound.css'

@Component
export default class NotFound extends Vue {
  render () {
    return (
      <div class={ styles.notfound }>
        <div class="container">
          <div class={ styles.center }>
            <div class={ styles.title }>404 Not Found</div>
            <div class={ styles.prompt }>{ this.$t('notfound.prompt') }</div>
          </div>
        </div>
      </div>
    )
  }
}
</script>
