/*
 * @Author: chenjunru
 * @Date: 2022-12-25 14:45:35
 * @LastEditTime: 2022-12-25 17:44:24
 * @LastEditors: chenjunru
 * @Description: Do not Edit
 * @FilePath: \my-components\packages\input\__tests__\input.test.js
 */
import input from "../src/input.vue"
import { mount } from "@vue/test-utils"

describe("cjr-input", () => {
	test("input-text", () => {
		const wrapper = mount(input)
		expect(wrapper.html()).toContain('input type="text"')
	})

	test("input-password", () => {
		const wrapper = mount(input, {
			propsData: {
				type: "password",
			},
		})
		expect(wrapper.html()).toContain('input type="password"')
	})

	test("input-password", () => {
		const wrapper = mount(input, {
			propsData: {
				type: "password",
				value: "admin",
			},
		})
		expect(wrapper.props("value")).toBe("admin")
	})

	test("input-snapshot", () => {
		const wrapper = mount(input, {
			propsData: {
				type: "text",
				value: "admin",
			},
		})
		expect(wrapper.vm.$el).toMatchSnapshot()
	})
})
