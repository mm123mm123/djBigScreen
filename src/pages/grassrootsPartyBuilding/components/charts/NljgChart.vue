<template>
	<div class="nljgChartContainer" ref="nljgChartContainer">
		<div class="cardTitle" ref="cardTitle">年龄结构</div>
		<div class="nljgChartBox" ref="nljgChartBox"></div>
	</div>
</template>
<script>
import * as echarts from "echarts";
import {px} from "../../../../utils/util.js";

export default {
	name: "NljgChart",
	data() {
		return {};
	},
	mounted() {
		const chartDom = this.$refs.nljgChartBox;
		const myChart = echarts.init(chartDom);
		// myChart.resize({height: this.$refs.nljgChartContainer.clientHeight - this.$refs.cardTitle});
		let option;

		option = {
			legend: {
				show: false
			},
			radar: {
				shape: "circle",
				radius: "50%",
				axisName: {
					show: true,
					color: "#f2d48f",
					fontSize: px(8)
				},
				axisNameGap: px(2),
				indicator: [
					{name: "30岁以下", max: 50000},
					{name: "30-40岁", max: 50000},
					{name: "40-50岁", max: 50000},
					{name: "50-60岁", max: 50000},
					{name: "60岁以上）", max: 50000},
				]
			},
			series: [{
				type: "radar",
				label: {
					show: false
				},
				data: [
					{
						value: [20000, 20000, 50000, 35000, 35000, 18000],
					},
				]
			}]
		};

		option && myChart.setOption(option);


	}
};

</script>
<style lang="scss" scoped>
@import "src/helper";
.nljgChartContainer{
	display: flex;
	flex-direction: column;
	height: 100%;
	.cardTitle {
		font-size: px(12);
	}
	.nljgChartBox {
		flex-grow: 1;
	}
}

</style>