<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/studio.css'
import ImageModal from '~components/ImageModal'

const list = [
  '/images/studio/G01.jpg',
  '/images/studio/G02.jpg',
  '/images/studio/G03.jpg',
  '/images/studio/G04.jpg',
  '/images/studio/G05.jpg',
  '/images/studio/G06.jpg',
  '/images/studio/G07.jpg',
  '/images/studio/G08.jpg',
  '/images/studio/G09.jpg',
  '/images/studio/G10.jpg',
  '/images/studio/G11.jpg',
  '/images/studio/G12.jpg',
  '/images/studio/G13.jpg',
  '/images/studio/G14.jpg',
  '/images/studio/G15.jpg',
  '/images/studio/G16.jpg',
  '/images/studio/G17.jpg',
  '/images/studio/G18.jpg',
  '/images/studio/G19.jpg',
  '/images/studio/G20.jpg',
  '/images/studio/G21.jpg',
  '/images/studio/G22.jpg',
  '/images/studio/G23.jpg',
  '/images/studio/G24.jpg'
]

@Component
export default class Studio extends Vue {
  currentIndex = 0
  visible = false
  handlClick (index) {
    this.currentIndex = index
    this.visible = true
  }
  handleModal (val) {
    switch (val) {
      case 'close':
        this.visible = false
        break
    }
  }
  pre () {
    if (this.currentIndex === 0) {
      this.currentIndex = list.length - 1
    } else {
      this.currentIndex--
    }
  }
  next () {
    if (this.currentIndex === list.length - 1) {
      this.currentIndex = 0
    } else {
      this.currentIndex++
    }
  }
  render () {
    const items = list.map((item, index) => {
      return (
        <div class={ styles.item }>
          <div class={ styles.imgWapper }><img src={ item } class={ styles.img } on-click={ _ => { this.handlClick(index) } }/></div>
        </div>
      )
    })
    return (
      <div class={ styles.studio }>
        { items }
        {
          this.visible ? <ImageModal
            src={ list[this.currentIndex] }
            on-pre={ this.pre }
            on-next={ this.next }
            on-change={ this.handleModal }
          /> : null
        }
      </div>
    )
  }
}
</script>
