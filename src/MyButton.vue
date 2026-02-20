<template>
	<button class="my-button" @click="click">{{ message }} !</button>
	<input type="text" v-model="message" />
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Click me');

const click = () => {
	message.value = 'Clicked';
};
</script>

<style lang="stylus">
.my-button
	color green
</style>
