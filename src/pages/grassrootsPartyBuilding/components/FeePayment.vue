<template>
	<div class="feePaymentContainer" ref="feePaymentContainer" id="feePaymentContainer">
				<div class="cardTitle" ref="cardTitle">党费缴纳统计</div>
		<div class="feePaymentChart" ref="feePaymentChart"></div>
	</div>
</template>
<script>
import * as echarts from "echarts";
import {px} from "../../../utils/util";

export default {
	name: "FeePayment",
	props: {
		secHeight: null
	},
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
			this.chartDom = this.$refs.feePaymentChart;
			this.myChart = echarts.init(this.chartDom);
			let option;

			option = {
				tooltip: {
					trigger: "axis",
					axisPointer: {
						type: "cross",
						crossStyle: {
							color: "#999"
						}
					}
				},
				legend: {
					itemGap: px(4),
					textStyle: {
						color: "#f2d48f",
						fontSize: px(9.5)
					}
				},
				xAxis: [
					{
						type: "category",
						data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
						axisPointer: {
							type: "shadow"
						},
						axisLabel: {
							fontSize: px(10.5),
							color: "#f2d48f"
						}
					}
				],
				yAxis: [
					{
						type: "value",
						min: 0,
						max: 1600,
						interval: 400,
						axisLabel: {
							formatter: "{value} ",
							fontSize: px(10.5),
							color: "#f2d48f",
							interval: 4
						},
					},
					{
						type: "value",
						min: 0,
						max: 1600,
						interval: 200,
						axisLabel: {
							formatter: "{value}",
							fontSize: px(10),
							color: "#f2d48f",
						}
					}
				],
				series: [
					{
						name: "支部缴纳统计",
						type: "bar",
						data: [1300, 1500, 900, 700, 500, 1000, 1200, 1400, 800, 600, 1300, 990]
					},
					{
						name: "党员缴纳统计",
						type: "line",
						yAxisIndex: 1,
						data: [500, 900, 1200, 1500, 900, 1200, 1000, 990, 700, 1000, 1300, 1000]
					}
				]
			};

			option && this.myChart.setOption(option);
		}
	},
	mounted() {
		this.containerDom = this.$refs.feePaymentContainer;
		setTimeout(() => {
			this.setChart();
		});
	}
};

</script>
<style lang="scss" scoped>
@import "src/helper";

.feePaymentContainer {
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 0 px(16);

	.cardTitle {
		padding: px(6) 0;
	}

	.feePaymentChart {
		flex-grow: 1;
		overflow: hidden;
	}
}
</style>