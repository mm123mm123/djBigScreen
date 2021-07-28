<template>
	<div class="content">
		<section class="box1">
			<section>
				<Djfc></Djfc>
			</section>
			<section>
				<GenderStructure/>
			</section>
			<section>
				<STRCharts/>
			</section>
		</section>
		<section class="box2">
			<section>
				<BasicSitch/>
			</section>
			<section>
				<CenterPic/>
			</section>
			<section id="feePaymentSec">
				<FeePayment :sec-height="feePaymentHeight"/>
			</section>
		</section>
		<section class="box3">
			<section></section>
			<section></section>
			<section></section>
		</section>
	</div>
</template>
<script>
import Djfc from "./components/Djfc.vue";
import GenderStructure from "./components/GenderStructure.vue";
import STRCharts from "./components/STRCharts.vue";
import BasicSitch from "./components/BasicSitch.vue";
import CenterPic from "./components/CenterPic.vue";
import FeePayment from "./components/FeePayment.vue";

export default {
	name: "grassrootsPartyBuilding",
	components: {Djfc, GenderStructure, STRCharts, BasicSitch, CenterPic, FeePayment},
	data() {
		return {
			feePaymentHeight: 0
		};
	},
	methods:{
		getHeight(element){
			this.$nextTick(()=>{
			})
		}
	},
	mounted() {
		this.feePaymentHeight = document.getElementById("feePaymentSec").clientHeight;
		this.getHeight(document.getElementById("feePaymentSec"))
	}
};

</script>
<style lang="scss" scoped>
@import "src/helper";

.content {
	display: grid;
	height: 100%;
	grid-template-columns: 25% 50% 25%;
	color: #f2d48f;

	> section + section {
		margin-left: px(8);
	}

	section {
		border: 1px solid blue;
	}

	.box1 {
		display: grid;
		grid-template-rows:35% 15% 50%;

		section {
			padding-left: px(16);
		}

		section + section {
			margin-top: px(8);
		}
	}

	.box2 {
		display: grid;
		grid-template-rows: 20% 46% 34%;
	}

	.box3 {
		display: grid;
		grid-template-rows: 25% 29% 46%;
	}

}
</style>