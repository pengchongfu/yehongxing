import Vue from 'vue'
import Component from 'nuxt-class-component'

@Component
export default class Header extends Vue {
  render () {
    return (
      <div class="container">header</div>
    )
  }
}
