<template>
	<div class="centerPicBox">
		<img src="/src/assets/images/Danghui_golden.png">
		<div>
			<div class="centerBoxTitle">党员总数</div>
			<div class="centerBoxNumber"><strong>5   2   6   0</strong>   人</div>
		</div>
	</div>
</template>
<script>
import dangHui from "../../../assets/images/Danghui_golden.png";

export default {
	name: "CenterPic",
	data() {
		return {
			picUrl: dangHui
		};
	},
	mounted() {
	}
};

</script>
<style lang="scss" scoped>
@import "src/helper";

.centerPicBox {
	height: 100%;
	position: relative;

	img {
		position: absolute;
		width: px(200);
		height: px(200);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0.08;
	}

	> div {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: px(24);


		.centerBoxTitle {
			text-align: center;
			margin-bottom: px(13);
		}
		.centerBoxNumber{
			color:#ffb328;
			strong{
				font-size: px(44);
			}
			text-align: center;
		}
	}
}

</style>