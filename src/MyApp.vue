<template>
	<div class="hello-world">
		<h1 class="title">{{ message }}</h1>
		<MyButton />
	</div>
</template>

<script setup>
import MyButton from './MyButton.vue';
import { ref } from 'vue';

const msg = 'Hello World !';
const message = ref(msg);
</script>

<style lang="stylus">
.hello-world
	background-color: #f0f0f0;
	.title
		color blue
</style>
