import CjrButton from '../src/button.vue'

export default {
  title: 'CjrButton',
  component: CjrButton
}

export const Button = _ => ({
  components: { CjrButton },
  template: `
    <div>
      <cjr-button></cjr-button>
    </div>
  `
})