<template>
	<view class="content">
		<ListCheckBox ref="listcheckbox" :isAll="false" :data="data" :activeSize="20" :size="30" position="right" @select="selectData">
			<template v-slot:checkSlot="{data}">
				<view class="test">
					<text>{{data.name}}</text>
					<text>{{data.value}}</text>
				</view>
			</template>
			<template v-slot:customBtn>
				<image style="width: 30rpx;height: 30rpx;" src="../../static/select.png" mode=""></image>
			</template>
			<template v-slot:customDisabledBtn>
				<image style="width: 30rpx;height: 30rpx;" src="../../static/disabledSel.png" mode=""></image>
			</template>
		</ListCheckBox>
		<button type="default" @click="selectAll">全选</button>
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
						disabled:true
					},
					{
						name: '名称二',
						value: 2,
						
					},
					{
						name: '名称三',
						value: 3,
						
					},
					{
						name: '名称四',
						value: 4
					},
					{
						name: '名称5',
						value: 5
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
			},
			selectAll(){
				this.$refs.listcheckbox.selectAllData()
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
