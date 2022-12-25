<!--
 * @Author: chenjunru
 * @Date: 2022-12-25 14:45:35
 * @LastEditTime: 2022-12-25 19:53:57
 * @LastEditors: chenjunru
 * @Description: Do not Edit
 * @FilePath: \my-components\packages\link\src\link.vue
-->
<template>
	<a
		:href="disabled ? null : href"
		:class="[disabled && 'disabled', !underline && 'no-underline']"
	>
		<slot></slot>
	</a>
</template>

<script>
	export default {
		name: "CjrLink",
		props: {
			href: {
				type: String,
			},
			disabled: {
				type: Boolean,
				default: false,
			},
			underline: {
				type: Boolean,
				default: false,
			},
		},
	}
</script>

<style scoped>
	.disabled {
		cursor: not-allowed;
		font-size: 16px;
	}
	.no-underline {
		text-decoration: none;
	}
</style>
