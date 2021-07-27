<template>
	<div class="STRCharts">
		<section>
			<div class="cardTitle" ref="cardTitle">学历结构</div>
			<div class="chartContainer">
				<xljgChart/>
			</div>
		</section>
		<section>
			<div class="cardTitle" ref="cardTitle">行业结构</div>
			<div class="chartContainer" ref="chartContainer2"></div>
		</section>
		<section>
			<div class="cardTitle" ref="cardTitle">党龄结构</div>
			<div class="chartContainer" ref="chartContainer3"></div>
		</section>
		<section>
			<div class="cardTitle" ref="cardTitle">年龄结构</div>
			<div class="chartContainer" ref="chartContainer4"></div>
		</section>
	</div>
</template>
<script>
import xljgChart from "./charts/xljgChart.vue";

export default {
	name: "GenderStructure",
	components: {xljgChart},
	data() {
		return {
			percentage: 70,
			percentage2: 30,
			customColor: "#f2d48f",
		};
	},
};

</script>
<style lang="scss" scoped>
@import "src/helper";

.STRCharts {
	height: 100%;
	display: grid;
	grid-template-rows: 50% 50%;
	grid-template-columns:50% 50%;

	section {
		border: 1px solid blue;
		display: flex;
		flex-direction: column;

		.cardTitle {
			font-size: px(12);
		}

		.chartContainer {
			flex-grow: 1;
		}
	}
}
</style>