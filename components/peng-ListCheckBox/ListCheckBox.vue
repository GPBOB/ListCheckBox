<template>
	<view class="lcb-container">
		<view class="lcb-all" v-if="isAll" :style="{'padding-top':padding+'px','padding-bottom':padding+'px'}"
			style="justify-content: flex-end;">
			<!-- 按钮左边 -->
			<text style="width: calc(100% - 40px)" v-if="position == 'right'">{{allText}}</text>
			<!-- 点击效果 -->
			<view v-if="!disabledAll" class="lcb-check-btn"
				:style="{'border-radius':type=='circle'&&'50%','border-color':linkBorder&&defaultColor, width: size + 'px',height: size + 'px'}"
				@click="selectAllData">
				<view v-if="isSelectAll && type!='custom'" class="lcb-check-btn-active"
					:style="{'background-color':defaultColor,'border-radius':type=='circle'&&'50%',width: activeSize + 'px',height: activeSize + 'px'}">
				</view>
				<!-- 自定义按钮 -->
				<!-- #ifndef MP-WEIXIN -->
				<slot v-if="isSelectAll&&type=='custom'" name="customBtn"></slot>
				<!-- #endif -->
			</view>
			<!-- 禁止点击效果 -->
			<view v-if="disabledAll" class="lcb-check-btn" :style="{'border-radius':type=='circle'&&'50%',width: size + 'px',
          height: size + 'px'}">
				<!-- 自定义按钮 -->
				<!-- #ifndef MP-WEIXIN -->
				<slot v-if="type=='custom'" name="customDisabledBtn"></slot>
				<!-- #endif -->
				<view v-if="type!='custom'"
					:class="['lcb-check-btn-disabled',isSelectAll&&'lcb-check-btn-disabled-check']"
					:style="{'border-radius':type=='circle'&&'50%'}"></view>
			</view>
			<text style="width: calc(100% - 40px)" v-if="position == 'left'">{{allText}}</text>
		</view>
		<view class="lcb-content">

			<view class="lcb-item" v-for="(item,index) in checkData" :key="index"
				:style="{'padding-top':padding+'px','padding-bottom':padding+'px'}">
				<view style="width: calc(100% - 40px)" v-if="position == 'right'">
					<!-- #ifndef MP-WEIXIN -->
					<slot name="checkSlot" :data="data[index]"></slot>
					<!-- #endif -->
					<!-- #ifdef MP-WEIXIN -->
					<slot :data="data[index]"></slot>
					<!-- #endif -->
				</view>
				<!-- 左侧按钮 -->
				<view v-if="!item.disabled" class="lcb-check-btn" :style="{'border-radius':type=='circle'&&'50%','border-color':linkBorder&&defaultColor, width: size + 'px',
            height: size + 'px'}" @click="select(item,index)">
					<view v-if="item.selected && type!='custom'" class="lcb-check-btn-active" :style="{'background-color':defaultColor,'border-radius':type=='circle'&&'50%', width: activeSize + 'px',
              height: activeSize + 'px'}"></view>
					<!-- #ifndef MP-WEIXIN -->
					<slot v-if="item.selected&&type=='custom'" name="customBtn"></slot>
					<!-- #endif -->
				</view>
				<view v-if="item.disabled" class="lcb-check-btn" :style="{'border-radius':type=='circle'&&'50%'}">
					<slot v-if="type=='custom'" name="customDisabledBtn"></slot>
					<view v-else :class="['lcb-check-btn-disabled',item.selected&&'lcb-check-btn-disabled-check']"
						:style="{'border-radius':type=='circle'&&'50%', width: size + 'px',height: size + 'px'}"></view>
				</view>
				<view style="width: calc(100% - 40px)" v-if="position == 'left'">
					<!-- #ifndef MP-WEIXIN -->
					<slot name="checkSlot" :data="data[index]"></slot>
					<!-- #endif -->
					<!-- #ifdef MP-WEIXIN -->
					<slot :data="data[index]"></slot>
					<!-- #endif -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "ListCheckBox",
		data() {
			return {
				selectIndexData: [], //选中index数据
				selectData: [], //选中数据
				isSelectAll: false,
				selectLength: 0, //可选数据长度
				defaultSelectData: [] // 默认选中并且设置disabled为true的数据
			};
		},
		props: {
			//默认主题颜色
			defaultColor: {
				type: String,
				default: '#1989fa'
			},
			//复选框边界和配置色统一
			linkBorder: {
				type: Boolean,
				default: true
			},
			//选择按钮类型 pane-方框，circle-圆形，custom-自定义
			type: {
				type: String,
				default: 'pane'
			},
			//是否全选
			selectAll: {
				type: Boolean,
				default: false
			},
			//是否显示全选
			isAll: {
				type: Boolean,
				default: true,
			},
			//禁止全选
			disabledAll: {
				type: Boolean,
				default: false
			},
			//数据
			data: {
				type: Array,
				default: []
			},
			//全选text
			allText: {
				type: String,
				default: '全选'
			},
			//列表上下padding
			padding: {
				type: Number,
				default: 10,
			},
			//选择框大小
			size: {
				type: Number,
				default: 16,
			},
			//选择框选中大小
			activeSize: {
				type: Number,
				default: 10,
			},
			//选择框位置
			position: {
				type: String,
				default: "left", //right top-left top-right
			},
		},
		computed: {
			checkData() {
				let datas = [...this.data]
				datas.map(el => {
					if (el.selected == undefined) {
						el.selected = false
					}
					if (el.disabled == undefined) {
						el.disabled = false
					}
					return el
				})
				return datas
			}
		},
		methods: {
			select(data, index) {
				let selIndex = this.selectIndexData.indexOf(index)
				let selData = data
				if (selIndex == -1) {
					this.checkData[index].selected = true
					this.selectData.push(selData)
					this.selectIndexData.push(index)
				} else {
					this.selectIndexData.splice(selIndex, 1)
					this.selectData.splice(selIndex, 1)
					this.checkData[index].selected = false
				}
				console.log(this.selectIndexData.length)
				if (this.selectIndexData.length == this.selectLength) {
					this.isSelectAll = true
				} else {
					this.isSelectAll = false
				}
				// this.$forceUpdate()
				this.$emit('select', this.selectData)
			},
			selectAllData() {
				this.isSelectAll = !this.isSelectAll
				if (this.isSelectAll) {
					this.checkData.map((el, index) => {
						if (this.selectIndexData.indexOf(index) == -1) {
							this.selectIndexData.push(index)
							el.selected = true
						}
						return el
					})
					this.selectData = [...this.checkData]
				} else {
					this.checkData.map((el, index) => {
						el.selected = false
						return el
					})
					this.selectData = []
					this.selectIndexData = []
				}
				// this.$forceUpdate()
				this.$emit('select', this.selectData)
			}
		},
		mounted() {
			this.isSelectAll = this.selectAll
			let i = 0
			this.data.forEach((el, index) => {
				el.lcb_id = index
				// 配置全选，计算总的能被选中数
				if (this.selectAll) {
					if (!el.disabled || el.selected) {
						el.selected = true
						i++
						this.selectData.push(el)
						this.selectIndexData.push(index)
					}
					this.selectLength = i
				} else {
					this.selectLength = this.data.length
					if (el.selected) {
						this.selectData.push(el)
						this.selectIndexData.push(index)
					}
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	.lcb-check-btn {
		width: 32rpx;
		height: 32rpx;
		border: 2rpx solid #B8B9BA;
		margin-right: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 6rpx;
	}

	.lcb-check-btn-active {
		display: inline-block;
		width: 20rpx;
		height: 20rpx;
		background-color: #000;
	}

	.lcb-check-btn-disabled {
		display: inline-block;
		width: 32rpx;
		height: 32rpx;
		background-color: #dddddd;
	}

	.lcb-check-btn-disabled-check {
		width: 20rpx;
		height: 20rpx;
	}

	// .lcb-check-btn-active {
	// 	width: 26rpx;
	// 	height: 26rpx;
	// 	background-color: #000;
	// }


	.lcb-container {

		// display: flex;
		.lcb-all {
			display: flex;
			align-items: center;
			border-bottom: 2rpx solid #e3e3e3;
			padding-bottom: 30rpx;
		}

		.lcb-content {
			display: flex;
			flex-direction: column;

			.lcb-item {
				width: 100%;
				display: flex;
				align-items: center;
				border-bottom: 2rpx solid #e3e3e3;
				padding: 30rpx 0rpx;
			}
		}
	}
</style>
