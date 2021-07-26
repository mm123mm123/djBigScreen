<template>
	<div class="photoContainer" ref="photoContainer">
		<div class="cardTitle" ref="cardTitle">党建活动风采</div>
		<el-carousel trigger="click" :height="carouselHeight+'px'" :interval=5000>
			<el-carousel-item v-for="item in djPhotos" :key="item"
			                  :style="'background-image:'+'url('+item+')'">
			</el-carousel-item>
		</el-carousel>
	</div>
</template>
<script>
import dj1 from "../../../assets/images/djPhoto1.jpeg";
import dj2 from "../../../assets/images/djPhoto2.jpeg";
import dj3 from "../../../assets/images/djPhoto3.jpeg";
import dj4 from "../../../assets/images/djPhoto4.jpeg";
import dj5 from "../../../assets/images/djPhoto5.jpeg";

export default {
	name: "Djfc",
	data() {
		return {
			carouselHeight: 300,
			djPhotos: [dj1, dj2, dj3, dj4, dj5]
		};
	},
	mounted() {
		this.carouselHeight = this.$refs.photoContainer.clientHeight - this.$refs.cardTitle.clientHeight;
	}
};

</script>
<style lang="scss" scoped>
@import "src/helper";
.photoContainer {
	display: flex;
	flex-direction: column;
	height: 100%;

	.cardTitle {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: px(8) 0;
	}

	.carouselContainer {
		flex-grow: 1;
	}

	.el-carousel__item {
		background-size: cover;
	}
}

</style>