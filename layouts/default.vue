<script>
import Header from '~components/Header'
import Footer from '~components/Footer'
import Nav from '~components/Nav'

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
        <div class={ 'container' + ' ' + styles.row + ' ' + styles.content }>
          <Nav/>
          <nuxt class={ styles.nuxt }/>
        </div>
        <Footer/>
      </div>
    )
  }
}
</script>
