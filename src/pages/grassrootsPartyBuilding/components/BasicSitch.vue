<template>
	<div class="sitchBox">
		<div class="cardTitle" ref="cardTitle">党员基本情况</div>
		<div class="stichTable">
			<ul>
				<li v-for="sitch in sitchArray.slice(0,3)">
					<div>
						<img src="src/assets/images/partyMember.png" class="ccpIcon"/>
						<span>{{sitch.title}}：<strong>{{ sitch.number }}</strong>人</span>
					</div>
				</li>
			</ul>
			<ul>
				<li v-for="sitch in sitchArray.slice(3)">
					<div>
						<img src="src/assets/images/partyMember.png" class="ccpIcon"/>
						<span>{{sitch.title}}：<strong>{{ sitch.number }}</strong>人</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import dj1 from "../../../assets/images/djPhoto1.jpeg";
import dj2 from "../../../assets/images/djPhoto2.jpeg";
import dj3 from "../../../assets/images/djPhoto3.jpeg";
import dj4 from "../../../assets/images/djPhoto4.jpeg";
import dj5 from "../../../assets/images/djPhoto5.jpeg";

export default {
	name: "BasicSitch",
	data() {
		return {
			sitchArray:[
				{title:'正式党员',number:3260},
				{title:'预备党员',number:310},
				{title:'发展党员',number:3120},
				{title:'流动党员',number:1560},
				{title:'基层党组织',number:213},
				{title:'军队退役党员',number:3200},
			]
		};
	},
	mounted() {
	}
};

</script>
<style lang="scss" scoped>
@import "src/helper";

.sitchBox {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 0 px(16);

	.cardTitle {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: px(8) 0;
	}

	.stichTable {
		ul {
			display: grid;
			grid-template-columns: 33% 33% 33%;
			li{
				div{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					.ccpIcon{
						height: px(19);
						width: px(19);
					}
					span{
						display: flex;
						align-items: center;
						font-size: px(12.5);
						strong{
							font-size: px(17);
							margin-right: px(3);
						}
					}
				}
			}
		}
		ul+ul{
			margin-top: px(6);
		}
	}
}

</style>