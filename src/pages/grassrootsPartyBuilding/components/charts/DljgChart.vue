<template>
	<div class="dljgChartBox" ref="dljgChartBox"></div>
</template>
<script>
import * as echarts from "echarts";
import {px} from '../../../../utils/util.js'
export default {
	name: "DljgChartBox",
	data() {
		return {};
	},
	mounted() {
		let chartDom = this.$refs.dljgChartBox;
		let myChart = echarts.init(chartDom);
		let option;

		option = {
			tooltip: {
				trigger: 'item'
			},
			color: [
				"#fe9666",
				"#f68635",
				"#e04b17",
				"#b35722",
				"#dc652a"
			],
			legend: {
				orient: 'vertical',
				top: "16%",
				left: "52%",
				textStyle: {
					color: "#f2d48f",
					fontSize: px(9)
				}
			},
			series: [
				{
					name: '访问来源',
					type: 'pie',
					radius: '62%',
					center: ["26%", "46%"],
					data: [
						{value: 300, name: '3年以下'},
						{value: 500, name: '3-5年'},
						{value: 500, name: '5-10年'},
						{value: 1000, name: '10年以上'},
					],
					label: {
						show: false,
						position: "center"
					},
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		};

		option && myChart.setOption(option);


	}
};

</script>
<style lang="scss" scoped>
@import "src/helper";

.dljgChartBox {
	height: 100%;
}
</style>