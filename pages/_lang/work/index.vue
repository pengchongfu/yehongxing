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
          <div>
              <img src={ `/images/work/${item}/${work[item][0]}` }/>
              <div>{ this.$t(`work.${item}`) }</div>
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
