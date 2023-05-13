<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<div class="container">
		<div class="centered-div">
			<nav class="nav">
				<RouterLink to="/">Home</RouterLink> |
				<RouterLink to="/about">About</RouterLink>
			</nav>
			<RouterView />
		</div>
	</div>
</template>

<style scoped>
.nav {
	text-align: center;
}
.container {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
.centered-div {
	width: 800px;
	height: 500px;
	background-color: #f2f2f2;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
