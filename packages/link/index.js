/*
 * @Author: chenjunru
 * @Date: 2022-12-25 14:45:35
 * @LastEditTime: 2022-12-25 17:47:44
 * @LastEditors: chenjunru
 * @Description: Do not Edit
 * @FilePath: \my-components\packages\link\index.js
 */
import CjrLink from "./src/link.vue"

CjrLink.install = (Vue) => {
	Vue.component(CjrLink.name, CjrLink)
}

export default CjrLink
