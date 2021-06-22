<template>
  <div class="content">
    <ListCheckBox
      type="custom"
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
        <img style="width:16px;height:16px" src="./static/select.png" alt="">
      </template>
      <template v-slot:customDisabledBtn>
        <img style="width:16px;height:16px" src="./static/disabledSel.png" alt="">
      </template>
    </ListCheckBox>
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
    };
  },
  components: {
    // ListCheckBox,
  },
  methods: {
    selectData(data) {
      console.log(data);
    },
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
