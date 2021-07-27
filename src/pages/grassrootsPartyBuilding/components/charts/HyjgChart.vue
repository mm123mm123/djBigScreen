<template>
	<div class="hyjgChartBox" ref="hyjgChartBox"></div>
</template>
<script>
import * as echarts from "echarts";
import {px} from '../../../../utils/util.js'
export default {
	name: "HyjgChart",
	data() {
		return {};
	},
	mounted() {
		let chartDom = this.$refs.hyjgChartBox;
		let myChart = echarts.init(chartDom);
		let option;

		option = {
			color: [
				"#fe9666",
				"#f68635",
				"#e04b17",
				"#b35722",
				"#dc652a"
			],
			legend: {
				top: "10%",
				left: "54%",
				textStyle: {
					color: "#f2d48f",
					fontSize: px(9)
				}
			},
			toolbox: {
				show: false,
				feature: {
					mark: {show: true},
					dataView: {show: true, readOnly: false},
					restore: {show: true},
					saveAsImage: {show: true}
				}
			},
			series: [
				{
					name: '面积模式',
					type: 'pie',
					radius: [10, 60],
					center: ['24%', '50%'],
					roseType: 'area',
					itemStyle: {
						borderRadius: 8
					},
					label:{
						show:false,
					},
					data: [
						{value: 40, name: '机关单位'},
						{value: 38, name: '生产单位'},
						{value: 32, name: '辅助单位'},
						{value: 30, name: '退休党员'},
						{value: 28, name: '其他'},
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

.hyjgChartBox {
	height: 100%;
}
</style>