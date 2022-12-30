/*
 * @Author: chenjunru
 * @Date: 2022-12-27 09:13:35
 * @LastEditTime: 2022-12-30 15:53:36
 * @LastEditors: chenjunru
 * @Description: Do not Edit
 * @FilePath: \cjr-components\packages\button\stories\button.stories.js
 */
import CjrButton from "../src/button.vue"

export default {
	title: "CjrButton",
	component: CjrButton,
}

export const Button = (_) => ({
	components: { CjrButton },
	template: `
    <div>
      <cjr-button>按钮</cjr-button>
    </div>
  `,
})
