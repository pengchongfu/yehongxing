<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/exhibitions.css'

@Component
export default class Detail extends Vue {
  render () {
    return (
      <div class={ styles.detail }>
        Detail
      </div>
    )
  }
}
</script>
