/*
 * @Author: chenjunru
 * @Date: 2022-12-25 14:45:35
 * @LastEditTime: 2022-12-25 17:47:31
 * @LastEditors: chenjunru
 * @Description: Do not Edit
 * @FilePath: \my-components\packages\link\stories\link.stories.js
 */
import CjrLink from "../src/link.vue"

export default {
	title: "CjrLink",
	component: CjrLink,
}

export const Link = (_) => ({
	components: { CjrLink },
	template: `
    <div>
      <cjr-link :disabled="true" href="http://www.baidu.com">baidu</cjr-link>
    </div>
  `,
})
