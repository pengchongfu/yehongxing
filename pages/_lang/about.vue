<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/about.css'
import { solo, group } from '~data/about'

function generateList (h, items) {
  return items.map(item => {
    return (
      <div class={ styles.item }>
        <div>{ item.time }</div>
        <ul>
        { item.exhibitions.map(exhibition => {
          return (
            <li class={ styles.li }>
              <div>{ exhibition.name[this.$i18n.locale] }</div>
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
            <div class="col-md-6">
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
            <div class="offset-1"></div>
            <div class="col-md-4">
              <img class={ styles.img } src="/images/about/about.jpg" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
</script>
