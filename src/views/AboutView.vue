<script setup>
import { useCounterStore } from "../stores/counter";
const countStore = useCounterStore();
</script>

<template>
	<div class="about">
		<h1>The counter from store state is : {{ countStore.count }}</h1>
		<button class="btn" @click="countStore.counterDown">-</button>
	</div>
</template>
