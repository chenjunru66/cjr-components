<!--
 * @Author: chenjunru
 * @Date: 2022-12-25 14:45:35
 * @LastEditTime: 2022-12-25 17:44:54
 * @LastEditors: chenjunru
 * @Description: Do not Edit
 * @FilePath: \my-components\packages\input\src\input.vue
-->
<template>
	<div>
		<input v-bind="$attrs" :type="type" :value="value" @input="handleInput" />
	</div>
</template>

<script>
	export default {
		name: "CjrInput",
		inheritAttrs: false,
		props: {
			value: {
				type: String,
			},
			type: {
				type: String,
				default: "text",
			},
		},
		methods: {
			handleInput(evt) {
				this.$emit("input", evt.target.value)
				const findParent = (parent) => {
					while (parent) {
						if (parent.$options.name === "CjrFormItem") {
							break
						} else {
							parent = parent.$parent
						}
					}
					return parent
				}
				const parent = findParent(this.$parent)
				if (parent) {
					parent.$emit("validate")
				}
			},
		},
	}
</script>

<style></style>
