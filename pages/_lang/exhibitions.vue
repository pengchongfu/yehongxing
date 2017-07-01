<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/exhibitions.css'

@Component
export default class Exhibitions extends Vue {
  render () {
    return (
      <div class={ styles.exhibitions }>
        exhibitions
      </div>
    )
  }
}
</script>
