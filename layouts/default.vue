<script>
import Header from '~components/Header'
import Footer from '~components/Footer'

import styles from '~assets/default.css'

export default {
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
