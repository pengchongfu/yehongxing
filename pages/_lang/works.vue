<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/works.css'
import works from '~data/works.js'

@Component
export default class Works extends Vue {
  render () {
    const items = Object.keys(works).map(item => {
      return (
          <div>
              <img src={ `/images/work/${item}/${works[item][0]}` }/>
              <div>{ this.$t(`works.${item}`) }</div>
          </div>
      )
    })
    return (
      <div class={ styles.works }>
        <div class="container">
          { items }
        </div>
      </div>
    )
  }
}
</script>
