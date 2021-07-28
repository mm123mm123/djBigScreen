<template>
	<div class="STRCharts">
		<section>
			<div class="cardTitle">学历结构</div>
			<div class="chartContainer">
				<XljgChart/>
			</div>
		</section>
		<section>
			<div class="cardTitle">行业结构</div>
			<div class="chartContainer">
				<HyjgChart/>
			</div>
		</section>
		<section>
			<div class="cardTitle">党龄结构</div>
			<div class="chartContainer">
				<DljgChart/>
			</div>
		</section>
		<section>
			<div class="cardTitle" ref="cardTitle">年龄结构</div>
			<div class="chartContainer">
				<NljgChart/>
			</div>
		</section>
	</div>
</template>
<script>
import XljgChart from "./charts/XljgChart.vue";
import HyjgChart from "./charts/HyjgChart.vue";
import DljgChart from "./charts/DljgChart.vue";
import NljgChart from "./charts/NljgChart.vue";

export default {
	name: "GenderStructure",
	components: {XljgChart, HyjgChart, DljgChart, NljgChart},
	data() {
		return {
			percentage: 70,
			percentage2: 30,
			customColor: "#f2d48f",
			titleHeight: 0
		};
	},
	mounted() {
	}
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