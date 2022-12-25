/*
 * @Author: chenjunru
 * @Date: 2022-12-25 14:45:34
 * @LastEditTime: 2022-12-25 17:40:45
 * @LastEditors: chenjunru
 * @Description: Do not Edit
 * @FilePath: \my-components\packages\form\index.js
 */
import CjrForm from "./src/form.vue"

CjrForm.install = (Vue) => {
	Vue.component(CjrForm.name, CjrForm)
}
console.log("test")
export default CjrForm
