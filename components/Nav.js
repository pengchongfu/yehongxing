import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/nav.css'

@Component
export default class Nav extends Vue {
  render () {
    return (
      <div class={ styles.nav }>
        <ul>
          <li class={ styles.listItem }>
            <nuxt-link class={{[styles.active]: this.$route.fullPath === '/' || this.$route.fullPath === '/zh'}} to={ `/${this.$i18n.locale}` }>{ this.$t('header.index') }</nuxt-link>
          </li>
          <li class={ styles.listItem }>
            <nuxt-link class={{[styles.active]: this.$route.fullPath.indexOf('work') !== -1}} to={ `/${this.$i18n.locale}/work` }>{ this.$t('header.work') }</nuxt-link>
          </li>
          <li class={ styles.listItem }
          >
            <nuxt-link class={{[styles.active]: this.$route.fullPath.indexOf('exhibitions') !== -1}} to={ `/${this.$i18n.locale}/exhibitions` }>{ this.$t('header.exhibitions') }</nuxt-link>
          </li>
          <li class={ styles.listItem }>
            <nuxt-link class={{[styles.active]: this.$route.fullPath.indexOf('studio') !== -1}} to={ `/${this.$i18n.locale}/studio` }>{ this.$t('header.studio') }</nuxt-link>
          </li>
          <li class={ styles.listItem }>
            <nuxt-link class={{[styles.active]: this.$route.fullPath.indexOf('news') !== -1}} to={ `/${this.$i18n.locale}/news` }>{ this.$t('header.news') }</nuxt-link>
          </li>
          <li class={ styles.listItem }>
            <nuxt-link class={{[styles.active]: this.$route.fullPath.indexOf('about') !== -1}} to={ `/${this.$i18n.locale}/about` }>{ this.$t('header.about') }</nuxt-link>
          </li>
        </ul>
      </div>
    )
  }
}
