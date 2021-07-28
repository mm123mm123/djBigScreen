<template>
	<div class="pageContainer">
		<img src="/src/assets/images/construc.png" alt="">
		<span>页面正在建设中，敬请期待...</span>
	</div>
</template>
<script>

export default {
	name: "underConstruc",
};

</script>
<style lang="scss" scoped>
@import "src/helper";

.pageContainer {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	img{
		margin-bottom: px(50);
	}
	span{
		font-size: px(26);
		color: #f2d48f;
	}
}
</style>