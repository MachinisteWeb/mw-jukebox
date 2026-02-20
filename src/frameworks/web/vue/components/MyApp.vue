<template>
	<div class="hello-world">
		<h1 class="title">{{ message }}</h1>
		<MyButton />
	</div>
</template>

<script setup lang="ts">
import MyButton from '@webvue/components/MyButton.vue';
import { ref, type Ref } from 'vue';

const msg: string = 'Hello World !';
const message: Ref<string> = ref(msg);
</script>

<style lang="stylus">
.hello-world
	background-color: #f0f0f0;
	.title
		color blue
</style>
