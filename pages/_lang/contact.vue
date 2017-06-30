<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/contact.css'

@Component
export default class Contact extends Vue {
  render () {
    return (
      <div class={ styles.contact }>
        <div class="container">
          contact
        </div>
      </div>
    )
  }
}

</script>
