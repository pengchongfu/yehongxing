import Vue from 'vue'
import Component from 'vue-class-component'

import '~assets/modal.css'

@Component
export default class Modal extends Vue {
  render () {
    return (
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-container">
            { this.$slots.default }
          </div>
          <div class="modal-close" on-click={ _ => { this.$emit('change', 'close') } }>
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
      </transition>
    )
  }
  mounted () {
    document.onkeydown = e => {
      if (e.keyCode === 27) {
        this.$emit('change', 'close')
      }
    }
  }
  beforeDestroy () {
    document.onkeydown = null
  }
}
