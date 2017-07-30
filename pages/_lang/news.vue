<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/news.css'

@Component
export default class News extends Vue {
  render () {
    return (
      <div class={ styles.news }>news</div>
    )
  }
}
</script>
