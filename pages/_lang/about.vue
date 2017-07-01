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
            <div class="col-4">
              4
            </div>
            <div class="col-8">
              8
            </div>
          </div>
        </div>
      </div>
    )
  }
}
</script>
