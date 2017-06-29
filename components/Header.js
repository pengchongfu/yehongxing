import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/header.css'

@Component
export default class Header extends Vue {
  small = false
  onscroll () {
    if (document.body.scrollTop > 80) {
      this.small = true
    } else {
      this.small = false
    }
  }
  render () {
    return (
      <div class={ `${styles.header} ${this.small ? styles.small : null}` }>
        <div class="container">
          <div class={ styles.brand }>Ye HongXing</div>
          <ul class={ styles.list }>
            <li>主页</li>
            <li>作品</li>
            <li>展览</li>
            <li>工作室</li>
            <li>关于</li>
            <li>联系方式</li>
          </ul>
        </div>
      </div>
    )
  }
  mounted () {
    this.onscroll()
    window.onscroll = this.onscroll
  }
}
