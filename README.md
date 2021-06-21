# ListCheckBox
## 使用说明
|  参数  | 类型 | 默认值 | 说明 |
|  ----  | ----  | ---- |  ---- |
| defaultColor  | string | #1989fa(蓝色) | 默认主题色 | 
| linkBorder  |  boolean | true | 复选框边界和配置色统一 |
| type  |  string | pane | 选择按钮类型 pane-方框，circle-圆形，custom-自定义 |
| selectAll  | boolean | false | 是否全选 |
| disabledAll  |  boolean | false | 禁止全选 |
| data  |  array | [] | 数据 |
| allText  | string | 全选 | 全选文本 |
##方法
|  方法名 | 返回值 |
|  ----  | ----  | 
|  select | 选中的数据 |
##data数据说明：
data数据格式为：
```
[
    {
        name:'张三',
        value:1,
        selected:true,
        disabled:true,
    },
    {
        name:'里斯',
        value:2
    },
]
```
其中selected默认为false,disabled默认为false,可设置。
其余数据可自定义设置
#使用方法
```
<ListCheckBox
      :selectAll="false"
      :data="data"
      @select="selectData"
    >
      <template v-slot:checkSlot="item">
        <div class="test">
          <p>{{ item.data.name }}</p>
          <p>{{ item.data.value }}</p>
        </div>
      </template>
      <template v-slot:customBtn>
      </template>
    </ListCheckBox>
```
##type为custom时，自定义选择效果：
```
//添加插槽名为customBtn
<template v-slot:customBtn>
				<image style="width: 15px;height: 15px;" src="../../static/select.png" mode=""></image>
</template>
```
##github
https://github.com/GPBOB/ListCheckBox/tree/vue2.0