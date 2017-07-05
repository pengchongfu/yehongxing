import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/picker.css'
import clickOutside from '~utils/clickoutside'

@Component({
  props: {
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: _ => []
    }
  },
  directives: {
    clickOutside
  }
})
export default class Picker extends Vue {
  show = false
  get selectedLabel () {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i].value === this.value) {
        return this.options[i].label
      }
    }
  }
  render () {
    let options = this.options.map(item => {
      return <li class={ `${this.value === item.value ? styles.selected : ''}` } on-click={ _ => { this.$emit('change', item.value) } }>{ item.label }</li>
    })
    return (
      <div class={ styles.picker } v-click-outside={ _ => { this.show = false } }>
        <div on-click={ _ => { this.show = !this.show } }>
          <div class={ styles.label }>
            { this.selectedLabel }
            <i class={ `fa fa-chevron-down ${styles.icon}` } aria-hidden="true"></i>
          </div>
          <ul class={ `${styles.options} ${this.show ? styles.show : ''}` }>
            { options }
          </ul>
        </div>
      </div>
    )
  }
}
