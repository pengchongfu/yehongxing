<script>
import Header from '~components/Header'
import Footer from '~components/Footer'

import styles from '~assets/default.css'

export default {
  head () {
    return {
      title: this.$t('about.name'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('head.description') }
      ]
    }
  },
  render () {
    return (
      <div>
        <Header/>
        <nuxt class={ styles.default }/>
        <Footer/>
      </div>
    )
  }
}
</script>
