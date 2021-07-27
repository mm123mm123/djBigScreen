<template>
	<div class="progressBox" ref="progressBox">
		<div class="cardTitle" ref="cardTitle">性别结构</div>
		<div class="PROGBar">
			<span>男性</span>
			<el-progress :percentage="percentage" :color="customColor"></el-progress>
		</div>
		<div class="PROGBar">
			<span>女性</span>
			<el-progress :percentage="percentage2" :color="customColor"></el-progress>
		</div>
	</div>
</template>
<script>

export default {
	name: "GenderStructure",
	data() {
		return {
			percentage: 70,
			percentage2: 30,
			customColor: "#f2d48f",
		};
	},
	mounted() {
	}
};

</script>
<style lang="scss" scoped>
@import "src/helper";

.progressBox {
	display: flex;
	flex-direction: column;

	.cardTitle {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: px(3) 0;
	}

	.PROGBar {
		display: flex;

		span {
			font-size: px(12);
		}

		.el-progress {
			flex-grow: 1;
			margin-left: px(10);

			::v-deep .el-progress-bar {
				.el-progress-bar__outer {
					background-color: #ba531b;
					height: px(4) !important;
				}
			}

			::v-deep .el-progress__text {
				margin-left: px(10);
				span {
					font-size: px(10);
					color: #f2d48f;
				}
			}
		}
	}
}
</style>