<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'
import WorkDetail from '~pages/_lang/work/_detail'

import styles from '~assets/exhibitions.css'
import listMap from '~data/exhibitions.js'

@Component({
  mixins: [ WorkDetail ]
})
export default class Detail extends Vue {
  asyncData ({params}) {
    const typeArray = listMap[params.type]
    const meta = typeArray[typeArray.length - params.detail]
    const list = meta.images
    return {
      meta,
      list
    }
  }
  render () {
    let vnode = <div class={ styles.detailMeta }>
      <div class={ styles.detailName }>{ this.meta.name[this.$i18n.locale] }</div>
      <div class={ styles.detailTime }>{ this.meta.time }</div>
      <div class={ styles.detailPlace }>
        <span>{ this.meta.place[this.$i18n.locale] }</span> <span>{ this.meta.city[this.$i18n.locale] }</span>
      </div>
    </div>
    return this.r(vnode)
  }
}
</script>
