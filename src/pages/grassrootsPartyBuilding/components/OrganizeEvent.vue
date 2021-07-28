<template>
	<div class="eventContainer" ref="eventContainer" id="eventContainer">
		<div class="cardTitle" ref="cardTitle">党员组织活动</div>
		<div class="boardContainer">
			<dv-scroll-board :config="config" style="width:100%;height:96%"/>
		</div>
	</div>
</template>
<script>
import {px} from "../../../utils/util.js";

export default {
	name: "OrganizeEvent",
	data() {
		return {
			config: {
				header: ["党支部", "党员数", "参与活动"],
				data: [
					["综采一队", "160", "植树护林"],
					["综采三队", "120", "老区扶贫"],
					["机掘二队", "110", "社区服务"],
					["机掘六队", "90", "老区扶贫"],
					["财务科", "30", "社区服务"],
					["社保处", "60", "老区扶贫"],
					["盘管二队", "50", "植树护林"],
					["保卫科", "30", "老区扶贫"],
				],
				oddRowBGC: "#a41516",
				evenRowBGC: "#8f1c1b",
				waitTime: 5000,
				align: ["center", "center", "center",],
				headerHeight: px(22)
			}
		};
	},
};

</script>
<style lang="scss" scoped>
@import "src/helper";

.eventContainer {
	height: 100%;
	display: flex;
	flex-direction: column;

	.cardTitle {
		padding: px(4) px(6);
	}

	.boardContainer {
		padding-left: px(8);
		padding-top: px(4);
		padding-bottom: px(6);
		flex-grow: 1;

		.dv-scroll-board {

			::v-deep .header {
				background-color: #8f1c1b !important;
				font-size: px(12.5);
				font-weight: 800;
				color: #f2d48f;
			}

			::v-deep .rows {
				.row-item {
					font-size: px(10);
					color: #f2d48f;
				}
			}
		}
	}
}
</style>