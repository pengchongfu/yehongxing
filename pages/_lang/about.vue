<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/about.css'
import { solo, group } from '~data/about'

function generateList (h, items) {
  return items.map(item => {
    return (
      <div class={ styles.item }>
        <div class={ styles.time }>{ item.time }</div>
        <ul>
        { item.exhibitions.map(exhibition => {
          return (
            <li class={ styles.li }>
              <span class={ styles.exhibitionName }>{ exhibition.name[this.$i18n.locale] }</span>
              <span>{ exhibition.place[this.$i18n.locale] }</span>
              <span class={ exhibition.place[this.$i18n.locale] ? styles.city : null }>{ exhibition.city[this.$i18n.locale] }</span>
            </li>
          )
        }) }
        </ul>
      </div>
    )
  })
}

@Component
export default class About extends Vue {
  render (h) {
    const soloExhibitions = generateList.call(this, h, solo)
    const groupExhibitions = generateList.call(this, h, group)
    return (
      <div class={ styles.about }>
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class={ styles.name }>{ this.$t('about.name') }</div>
              <p>{ this.$t('about.description') }</p>
              <div class={ styles.panel }>
                <div class={ styles.title }>{ this.$t('about.solo') }:</div>
                { soloExhibitions }
              </div>
              <div class={ styles.panel }>
                <div class={ styles.title }>{ this.$t('about.group') }:</div>
                { groupExhibitions }
              </div>
            </div>
            <div class="col-md-4">
              <img class={ styles.img } src="/images/about/about.jpg" />
              <div class={ styles.mail }>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <a href="mailto:yehongxing2013@163.com">yehongxing2013@163.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
</script>
