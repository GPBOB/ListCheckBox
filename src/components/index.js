// sayhello.js
import ListCheckBox from './ListCheckBox.vue'
// let $vm


  ListCheckBox.install =function(Vue) {
    Vue.component(ListCheckBox.name,ListCheckBox)
  }
  export default ListCheckBox