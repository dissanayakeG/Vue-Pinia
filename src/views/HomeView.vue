<script setup>
import { useCounterStore } from "../stores/counter";
const countStore = useCounterStore();
</script>

<template>
	<div class="home">
		<p>
			<strong style="font-weight: bold;">Why is Pinia replacing Vuex?</strong>
      <hr>
			Vuex provides you with just one store which can have multiple
			modules within it. Whereas in Pinia, you can create multiple stores
			that can be imported into components directly where they're needed.
			This allows bundlers to better code split and provides better
			TypeScript inferences
		</p>
    <hr>

		<h1>The counter from store state is : {{ countStore.count }}</h1>
		<h1>
			The doubleCount from store getters is : {{ countStore.doubleCount }}
		</h1>

		<div class="buttons">
			<button class="btn" @click="countStore.counterDown">-</button>
			<button class="btn" @click="countStore.counterUp">+</button>
		</div>
	</div>
</template>
