/*
 * @Author: chenjunru
 * @Date: 2022-12-25 14:45:35
 * @LastEditTime: 2022-12-25 17:45:14
 * @LastEditors: chenjunru
 * @Description: Do not Edit
 * @FilePath: \my-components\packages\input\stories\input.stories.js
 */
import CjrInput from "../"

export default {
	title: "CjrInput",
	component: CjrInput,
}

export const Text = () => ({
	components: { CjrInput },
	template: '<cjr-input v-model="value"></cjr-input>',
	data() {
		return {
			value: "admin",
		}
	},
})

export const Password = () => ({
	components: { CjrInput },
	template: '<cjr-input type="password" v-model="value"></cjr-input>',
	data() {
		return {
			value: "admin",
		}
	},
})
