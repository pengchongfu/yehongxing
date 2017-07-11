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
          <ul class={ styles.list }>
            <li class={ styles.listItem }>
              <nuxt-link class={{[styles.active]: this.$route.fullPath === '/' || this.$route.fullPath === '/zh'}} to={ `/${this.$i18n.locale}` }>{ this.$t('header.index') }</nuxt-link>
            </li>
            <li class={ styles.listItem }>
              <nuxt-link class={{[styles.active]: this.$route.fullPath.indexOf('work') !== -1}} to={ `/${this.$i18n.locale}/work` }>{ this.$t('header.work') }</nuxt-link>
            </li>
            <li
              class={ styles.listItem }
              on-mouseenter={ _ => { this.show = true } }
              on-mouseleave={ _ => { this.show = false } }
              on-touchstart={ _ => { this.show = true } }
            >
              <nuxt-link class={{[styles.active]: this.$route.fullPath.indexOf('exhibitions') !== -1}} to={ `/${this.$i18n.locale}/exhibitions/solo` }>{ this.$t('header.exhibitions') }</nuxt-link>
              <ul class={ `${styles.sublist} ${this.show ? 'show' : ''}` }>
                <li on-click={ _ => { this.show = false } }>
                  <nuxt-link class={{[styles.active]: this.$route.fullPath.indexOf('/exhibitions/solo') !== -1}} to={ `/${this.$i18n.locale}/exhibitions/solo` }>{ this.$t('header.solo') }</nuxt-link>
                </li>
                <li on-click={ _ => { this.show = false } }>
                  <nuxt-link class={{[styles.active]: this.$route.fullPath.indexOf('/exhibitions/group') !== -1}} to={ `/${this.$i18n.locale}/exhibitions/group` }>{ this.$t('header.group') }</nuxt-link>
                </li>
              </ul>
            </li>
            <li class={ styles.listItem }>
              <nuxt-link class={{[styles.active]: this.$route.fullPath.indexOf('studio') !== -1}} to={ `/${this.$i18n.locale}/studio` }>{ this.$t('header.studio') }</nuxt-link>
            </li>
            <li class={ styles.listItem }>
              <nuxt-link class={{[styles.active]: this.$route.fullPath.indexOf('about') !== -1}} to={ `/${this.$i18n.locale}/about` }>{ this.$t('header.about') }</nuxt-link>
            </li>
          </ul>
        </div>
      </header>
    )
  }
  mounted () {
    this.onscroll()
    window.onscroll = this.onscroll
  }
}
