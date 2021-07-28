<template>
	<div class="birthdayBox">
		<div class="cardTitle" ref="cardTitle">党员政治生日</div>
		<div class="birthdayTable">
			<img src="src/assets/images/baige.png" alt="">
			<div>
				<ul>
					<li v-for="ccpBDay in ccpBDayArray.slice(0,2)">
						<span><span>{{ ccpBDay.number }}</span>{{ ccpBDay.title }}</span>
					</li>
				</ul>
				<ul>
					<li v-for="ccpBDay in ccpBDayArray.slice(2)">
						<span><span>{{ ccpBDay.number }}</span>{{ ccpBDay.title }}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import baige from "../../../assets/images/baige.png";

export default {
	name: "CCPBday",
	data() {
		return {
			ccpBDayArray: [
				{title: "本月政治生日党员", number: 360},
				{title: "当月预备期党员", number: 120},
				{title: "下月政治生日党员", number: 500},
				{title: "本季度政治生日党员", number: 1000},
			],
			picUrl: baige
		};
	},
	mounted() {
	}
};

</script>
<style lang="scss" scoped>
@import "src/helper";

.birthdayBox {
	display: flex;
	flex-direction: column;
	height: 100%;


	.cardTitle {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: px(8) 0;
	}

	.birthdayTable {
		position: relative;
		flex-grow: 1;

		img {
			position: absolute;
			width: px(120);
			height: px(120);
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			opacity: 0.2;
		}

		> div {
			position: absolute;
			width: 100%;

			ul {
				display: grid;
				grid-template-columns: 50% 50%;

				li {
					display: flex;
					justify-content: center;
					align-items: center;

					span {
						font-size: px(12);
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						margin-bottom: px(6);

						> span {
							font-family: digital-clock-font,serif;
							font-size: px(25);
							margin-right: px(3);
						}
					}
				}
			}

			ul + ul {
				margin-top: px(10);
			}
		}
	}
}

</style>