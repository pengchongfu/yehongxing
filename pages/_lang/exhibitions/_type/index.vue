<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/exhibitions.css'
import data from '~data/exhibitions.js'
import Picker from '~components/Picker'

@Component
export default class Exhibitions extends Vue {
  selected = ''
  data () {
    return {
      list: data[this.$route.params.type]
    }
  }
  get options () {
    const ans = []
    const l = this.list.length
    for (let i = 0; i < l; i++) {
      for (let j = i + 1; j < l; j++) {
        if (this.list[j].time === this.list[i].time) {
          i++
        }
      }
      ans.push({
        label: this.list[i].time,
        value: String(this.list[i].time)
      })
    }
    ans.sort((a, b) => {
      return b.value - a.value
    })
    ans.unshift({
      label: 'All Time',
      value: ''
    })
    return ans
  }
  get listShow () {
    if (this.selected === '') {
      return this.list
    } else {
      return this.list.filter(item => {
        return item.time === Number(this.selected)
      })
    }
  }
  render () {
    const items = this.listShow.map((item, index) => {
      return (
        <nuxt-link to={ `${this.$route.path}/${this.list.length - index}` }>
          <div class={ styles.item }>
            <div class={ styles.itemContent }>
              <img class={ styles.itemImg } src={ item.img }/>
              <div class={ styles.itemText }>
                <div class={ styles.itemName }>{ item.name }</div>
                <div class={ styles.itemTime }>{ item.time }</div>
              </div>
              <div class={ styles.itemNext }>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </nuxt-link>
      )
    })
    return (
      <div class={ styles.exhibitions }>
        <div class="container">
          <Picker
          value={ this.selected }
          options={ this.options }
          on-change={ val => { this.selected = val } }
          />
          { this.num }
          { items }
        </div>
      </div>
    )
  }
}
</script>
