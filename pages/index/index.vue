<template>
	<view class="content">
		<ListCheckBox :disabledAll="true" :data="data" @select="selectData">
			<template v-slot:checkSlot="item">
				<view class="test">
					<text>{{item.data.name}}</text>
					<text>{{item.data.value}}</text>
				</view>
			</template>
			<template v-slot:customBtn>
				<image style="width: 30rpx;height: 30rpx;" src="../../static/select.png" mode=""></image>
			</template>
			<template v-slot:customDisabledBtn>
				<image style="width: 30rpx;height: 30rpx;" src="../../static/disabledSel.png" mode=""></image>
			</template>
		</ListCheckBox>
	</view>
</template>

<script>
	import ListCheckBox from '@/components/peng-ListCheckBox/ListCheckBox.vue'
	export default {
		data() {
			return {
				data: [{
						name: '名称一',
						value: '可自定义内容',
						selected: true
					},
					{
						name: '名称二',
						value: 2,
						disabled: true,
						selected: true
					},
					{
						name: '名称三',
						value: 3,
						disabled: true,
					},
					{
						name: '名称四',
						value: 4
					}
				]
			}
		},
		components: {
			ListCheckBox
		},
		onLoad() {

		},
		methods: {
			selectData(data) {
				console.log(data)
			}
		}
	}
</script>

<style>
	.content {
		padding: 40rpx;

	}

	.test {
		display: flex;
		flex-direction: column;
	}
</style>
