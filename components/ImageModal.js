import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/imagemodal.css'
import Modal from '~components/Modal'

@Component({
  props: {
    src: String
  }
})
export default class ImageModal extends Vue {
  render () {
    return (
      <Modal on-change={ v => { this.$emit('change', v) } }>
        <div class={ styles.slider }>
          <img src={ this.src } />
          <div class={ styles.pre } on-click={ _ => { this.$emit('pre') } }>
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          <div class={ styles.next } on-click={ _ => { this.$emit('next') } }>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </Modal>
    )
  }
}
