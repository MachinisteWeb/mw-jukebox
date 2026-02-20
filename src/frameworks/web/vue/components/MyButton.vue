<template>
	<button class="my-button" @click="click">{{ message }} !</button>
	<input type="text" v-model="message" />
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

const message: Ref<string> = ref('Click me');

const click: () => void = () => {
	message.value = 'Clicked';
};
</script>

<style lang="stylus">
.my-button
	color green
</style>
