/*
 * @Author: chenjunru
 * @Date: 2022-12-25 14:45:35
 * @LastEditTime: 2022-12-25 17:45:49
 * @LastEditors: chenjunru
 * @Description: Do not Edit
 * @FilePath: \my-components\packages\input\index.js
 */
import CjrInput from "./src/input.vue"

CjrInput.install = (Vue) => {
	Vue.component(CjrInput.name, CjrInput)
}

export default CjrInput
