/*
 * @Author: chenjunru
 * @Date: 2022-12-25 14:45:34
 * @LastEditTime: 2022-12-25 17:36:47
 * @LastEditors: chenjunru
 * @Description: Do not Edit
 * @FilePath: \my-components\packages\formitem\index.js
 */
import CjrFormItem from "./src/formitem.vue"

CjrFormItem.install = (Vue) => {
	Vue.component(CjrFormItem.name, CjrFormItem)
}

export default CjrFormItem
