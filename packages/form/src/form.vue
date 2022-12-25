<!--
 * @Author: chenjunru
 * @Date: 2022-12-25 14:45:34
 * @LastEditTime: 2022-12-25 17:40:33
 * @LastEditors: chenjunru
 * @Description: Do not Edit
 * @FilePath: \my-components\packages\form\src\form.vue
-->
<template>
	<form>
		<slot></slot>
	</form>
</template>

<script>
	export default {
		name: "CjrForm",
		provide() {
			return {
				form: this,
			}
		},
		props: {
			model: {
				type: Object,
			},
			rules: {
				type: Object,
			},
		},
		methods: {
			validate(cb) {
				const tasks = this.$children
					.filter((child) => child.prop)
					.map((child) => child.validate())

				Promise.all(tasks)
					.then(() => cb(true))
					.catch(() => cb(false))
			},
		},
	}
</script>

<style></style>
