<template>
	<div class="content">
		<section class="box1">
			<section>
				<Djfc></Djfc>
			</section>
			<section></section>
			<section></section>
		</section>
		<section class="box2">
			<section></section>
			<section></section>
			<section></section>
		</section>
		<section class="box3">
			<section></section>
			<section></section>
			<section></section>
		</section>
	</div>
</template>
<script>
import Djfc from "./components/Djfc.vue";

export default {
	name: "grassrootsPartyBuilding",
	components: {Djfc},
	data() {
		return {};
	},
};

</script>
<style lang="scss" scoped>
@import "src/helper";

.content {
	display: grid;
	height: 100%;
	grid-template-columns: 25% 50% 25%;

	> section + section {
		margin-left: px(8);
	}

	section {
		border: 1px solid blue;
	}

	.box1 {
		display: grid;
		grid-template-rows:35% 15% 50%;

		section {
			padding-left: px(16);
		}

		section + section {
			margin-top: px(8);
		}
	}

	.box2 {
		display: grid;
		grid-template-rows: 20% 46% 34%;
	}

	.box3 {
		display: grid;
		grid-template-rows: 25% 29% 46%;
	}

}
</style>