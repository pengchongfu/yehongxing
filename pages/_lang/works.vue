<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/works.css'
import works from '~data/works.js'
import ImageModal from '~components/ImageModal'

@Component
export default class Works extends Vue {
  visible = false
  active = ''
  handleModal (val) {
    switch (val) {
      case 'close':
        this.visible = false
        break
    }
  }
  handleClick (item) {
    this.active = item
    this.visible = true
  }
  asyncData ({params}) {
    const indexs = {}
    Object.keys(works).map(item => {
      indexs[item] = 0
    })
    return {
      indexs
    }
  }
  add (item) {
    if (this.indexs[item] === works[item].length - 1) {
      this.indexs[item] = 0
    } else {
      this.indexs[item]++
    }
    this.$forceUpdate()
  }
  minus (item) {
    if (this.indexs[item] === 0) {
      this.indexs[item] = works[item].length - 1
    } else {
      this.indexs[item]--
    }
    this.$forceUpdate()
  }
  render () {
    const items = Object.keys(works).map(item => {
      return (
          <div class={ styles.item }>
            <div class={ styles.imgWrapper }>
              <img src={ works[item][this.indexs[item]] } on-click={ _ => { this.handleClick(item) } }/>
            </div>
            <div class={ styles.bar }>
              <span class={ styles.info }>{ this.$t(`works.${item}`) }</span>
              <span class={ styles.pagination }>
                <i class="fa fa-angle-left" aria-hidden="true" on-click={ _ => { this.minus(item) } }></i>
                <span class={ styles.page }>
                  <span>{ this.indexs[item] + 1 }</span>
                  <span> / </span>
                  <span>{ works[item].length }</span>
                </span>
                <i class="fa fa-angle-right" aria-hidden="true" on-click={ _ => { this.add(item) } }></i>
              </span>
            </div>
          </div>
      )
    })
    return (
      <div class={ styles.works }>
        { items }
        {
          this.visible ? <ImageModal
            src={ works[this.active][this.indexs[this.active]] }
            on-pre={ _ => { this.minus(this.active) } }
            on-next={ _ => { this.add(this.active) } }
            on-change={ this.handleModal }
          ><div class={ styles.description }>{ this.$t(`works.${this.active}`) }</div></ImageModal> : null
        }
      </div>
    )
  }
}
</script>
