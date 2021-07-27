<template>
	<bigScreen></bigScreen>
</template>
<script>
import bigScreen from "./pages/bigScreen/index.vue";

export default {
	name: "App",
	components: {
		bigScreen
	}
};
</script>
<style lang="scss">
@import "src/helper";

.cardTitle {
	font-size: px(14);
	color: #f2d48f;
	font-weight: 800;
}
</style>
