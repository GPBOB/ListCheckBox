<template>
  <div class="content">
    <ListCheckBox
    ref="list"
      
      :isAll="false"
      :disabledAll="true"

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
        <img style="width:16px;height:16px" src="./static/select.png" alt="">
      </template>
      <template v-slot:customDisabledBtn>
        <img style="width:16px;height:16px" src="./static/disabledSel.png" alt="">
      </template>
    </ListCheckBox>
    <button @click="clear">清空</button>
    <button @click="getData">获取</button>
  </div>
</template>

<script>
import Vue from 'vue';
import ListCheckBox from './components'
Vue.use(ListCheckBox)
export default {
  data() {
    return {
      data: [
        {
          name: "名称一",
          value: "可自定义内容",
          selected: true,
        },
        {
          name: "名称二",
          value: 2,
          disabled: true,
          selected: true,
        },
        {
          name: "名称三",
          value: 3,
          disabled: true,
        },
        {
          name: "名称四",
          value: 4,
        },
      ],
      selData:[]
    };
  },
  components: {
    // ListCheckBox,
  },
  methods: {
    selectData(data) {
      
      this.selData=data
    },
    getData(){
      console.log( this.selData);
    },
    clear(){
      this.$refs.list.reset()
    }
  },
};
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
