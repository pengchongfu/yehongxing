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
            <li><nuxt-link to={ '/' }>主页</nuxt-link></li>
            <li><nuxt-link to={ '/work' }>作品</nuxt-link></li>
            <li><nuxt-link to={ '/exhibitions' }>展览</nuxt-link></li>
            <li><nuxt-link to={ '/studio' }>工作室</nuxt-link></li>
            <li><nuxt-link to={ '/about' }>关于</nuxt-link></li>
            <li><nuxt-link to={ '/contact' }>联系方式</nuxt-link></li>
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
