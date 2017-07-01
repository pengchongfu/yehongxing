<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/work.css'

@Component
export default class Work extends Vue {
  render () {
    return (
      <div class={ styles.work }>
        work
      </div>
    )
  }
}
</script>
