<template>
	<div class="nljgChartBox" ref="xljgChartBox"></div>
</template>
<script>
import * as echarts from "echarts";
import {px} from '../../../../utils/util.js'
export default {
	name: "xljgChart",
	data() {
		return {};
	},
	mounted() {
		let chartDom = this.$refs.xljgChartBox;
		let myChart = echarts.init(chartDom);
		let option = {
			color: [
				"#fe9666",
				"#f68635",
				"#e04b17",
				"#b35722",
				"#dc652a"
			],
			tooltip: {
				trigger: "item"
			},

			legend: {
				top: px(16),
				right: px(6),
				itemGap:px(4),
				orient:'vertical',
				align:'left',
				textStyle: {
					color: "#f2d48f",
					fontSize: px(9)
				}
			},
			series: [
				{
					name: "学历结构",
					type: "pie",
					radius: ["50%", "65%"],
					avoidLabelOverlap: false,
					center: [px(34), px(50)],
					label: {
						show: false,
						position: "center"
					},
					emphasis: {
						label: {
							show: false,
							fontSize: "40",
							fontWeight: "bold"
						}
					},
					labelLine: {
						show: false
					},
					data: [
						{value: 1048, name: "本科"},
						{value: 735, name: "大专"},
						{value: 200, name: "研究生"},
						{value: 300, name: "高中"},
						{value: 300, name: "其他"}
					]
				}
			]
		};

		option && myChart.setOption(option);

	}
};

</script>
<style lang="scss" scoped>
@import "src/helper";

.nljgChartBox {
	height: 100%;
}
</style>