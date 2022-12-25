/*
 * @Author: chenjunru
 * @Date: 2022-12-25 14:45:34
 * @LastEditTime: 2022-12-25 17:42:01
 * @LastEditors: chenjunru
 * @Description: Do not Edit
 * @FilePath: \my-components\packages\form\stories\form.stories.js
 */
import CjrForm from "../"
import CjrFormItem from "../../formitem"
import CjrInput from "../../input"

export default {
	title: "CjrForm",
	component: CjrForm,
}

export const Login = () => ({
	components: { CjrForm, CjrFormItem, CjrInput },
	template: `
    <cjr-form class="form" ref="form" :model="user" :rules="rules">
      <cjr-form-item label="用户名" prop="username">
        <cjr-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></cjr-input>
      </cjr-form-item>
      <cjr-form-item label="密码" prop="password">
        <cjr-input type="password" v-model="user.password"></cjr-input>
      </cjr-form-item>
      
    </cjr-form>
  `,
	data() {
		return {
			user: {
				username: "",
				password: "",
			},
			rules: {
				username: [
					{
						required: true,
						message: "请输入用户名",
					},
				],
				password: [
					{
						required: true,
						message: "请输入密码",
					},
					{
						min: 6,
						max: 12,
						message: "请输入6-12位密码",
					},
				],
			},
		}
	},
	methods: {
		login() {
			console.log("button")
			this.$refs.form.validate((valid) => {
				if (valid) {
					alert("验证成功")
				} else {
					alert("验证失败")
					return false
				}
			})
		},
	},
})
