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
  route (locale) {
    if (this.$i18n.locale === locale) {
      return
    }
    if (locale === 'en') {
      this.$router.push('/en')
    } else {
      this.$router.push('/zh')
    }
  }
  render () {
    return (
      <div class={ `${styles.header} ${this.small ? styles.small : null}` }>
        <div class="container">
          <div class={ styles.brand }>Ye HongXing</div>
          <ul class={ styles.list }>
            <li><nuxt-link to={ `/${this.$i18n.locale}` }>{ this.$t('header.index') }</nuxt-link></li>
            <li><nuxt-link to={ `/${this.$i18n.locale}/work` }>{ this.$t('header.work') }</nuxt-link></li>
            <li><nuxt-link to={ `/${this.$i18n.locale}/exhibitions` }>{ this.$t('header.exhibitions') }</nuxt-link></li>
            <li><nuxt-link to={ `/${this.$i18n.locale}/studio` }>{ this.$t('header.studio') }</nuxt-link></li>
            <li><nuxt-link to={ `/${this.$i18n.locale}/about` }>{ this.$t('header.about') }</nuxt-link></li>
            <li><nuxt-link to={ `/${this.$i18n.locale}/contact` }>{ this.$t('header.contact') }</nuxt-link></li>
          </ul>
          <div class={ styles.locale }>
            <span class={ this.$i18n.locale === 'en' ? styles.active : null } on-click={ _ => { this.route('en') } }>En</span>
            <span> / </span>
            <span class={ this.$i18n.locale === 'zh' ? styles.active : null } on-click={ _ => { this.route('zh') } }>中文</span>
          </div>
        </div>
      </div>
    )
  }
  mounted () {
    this.onscroll()
    window.onscroll = this.onscroll
  }
}
