import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/header.css'

@Component
export default class Header extends Vue {
  small = false
  show = false
  onscroll () {
    if (document.body.scrollTop > 80) {
      this.small = true
    } else {
      this.small = false
    }
  }
  get routeEn () {
    if (this.$i18n.locale === 'en') {
      return this.$route.fullPath
    } else {
      return this.$route.fullPath.replace(/^\/zh/, '')
    }
  }
  get routeZh () {
    if (this.$i18n.locale === 'zh') {
      return this.$route.fullPath
    } else {
      return `/zh${this.$route.fullPath}`
    }
  }
  render () {
    return (
      <header class={ `${styles.header} ${this.small ? styles.small : null}` }>
        <div class="container">
          <nuxt-link to={ `/${this.$i18n.locale}` }><div class={ styles.brand }>{ this.$t('about.name') }</div></nuxt-link>
          <div class={ styles.locale }>
            <nuxt-link to={ this.routeEn } class={ this.$i18n.locale === 'en' ? styles.active : null }>En</nuxt-link>
            <span> / </span>
            <nuxt-link to={ this.routeZh } class={ this.$i18n.locale === 'zh' ? styles.active : null }>中文</nuxt-link>
          </div>
        </div>
      </header>
    )
  }
  mounted () {
    this.onscroll()
    window.onscroll = this.onscroll
  }
}
