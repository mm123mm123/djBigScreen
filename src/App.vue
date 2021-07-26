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
	font-size: px(12);
	color:#f2d48f
}
</style>
