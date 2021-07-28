<template>
	<div class="devCCPContainer" ref="devCCPContainer" id="devCCPContainer">
		<div class="cardTitle" ref="cardTitle">发展党员情况</div>
		<div class="devCCPChart" ref="devCCPChart"></div>
	</div>
</template>
<script>
import * as echarts from "echarts";
import {px} from "../../../utils/util";

export default {
	name: "DevCCP",
	data() {
		return {
			percentage: 70,
			percentage2: 30,
			customColor: "#f2d48f",
			chartDom: {},
			myChart: {},
			containerDom: {}
		};
	},
	methods: {
		setChart() {
			const chartDom = this.$refs.devCCPChart;
			const myChart = echarts.init(chartDom);
			let option;

			option = {
				barWidth: px(15),
				grid: {
					x: px(22),
					y: px(10),
					x2: px(0),
					y2: px(20)
				},
				xAxis: {
					type: "category",
					data: ["2017", "2018", "2019", "2020", "2021"],
					axisLabel: {
						fontSize: px(10.5),
						color: "#f2d48f"
					},
					axisLine: {
						show: false
					}
				},
				yAxis: {
					type: "value",
					min: 0,
					max: 4000,
					interval: 1000,
					axisLabel: {
						formatter: (para) => {
							return para === 0 ? para : para / 1000 + "k";
						},
						fontSize: px(10.5),
						color: "#f2d48f",
						margin: 0
					},
					splitLine: {
						show: false
					}
				},
				series: [{
					data: [900, 1000, 1600, 2200, 3000],
					type: "bar",
					showBackground: false,
					itemStyle: {
						color: "#ed6c37"
					}
				}]
			};

			option && myChart.setOption(option);

		}
	},
	mounted() {
		setTimeout(() => {
			this.setChart();
		});
	}
};

</script>
<style lang="scss" scoped>
@import "src/helper";

.devCCPContainer {
	height: 100%;
	display: flex;
	flex-direction: column;

	.cardTitle {
		padding: px(4) px(6);
	}

	.devCCPChart {
		flex-grow: 1;
	}
}
</style>