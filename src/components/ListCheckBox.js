// sayhello.js
import ListCheckBox from './ListCheckBox.vue'
// let $vm

export default {
  install (Vue) {
    // if (!$vm) {
    //   const ListCheckBoxPlugin = Vue.extend(ListCheckBox)

    //   $vm = new ListCheckBoxPlugin({
    //     el: document.createElement('div')
    //   })
    //   document.body.appendChild($vm.$el)
    // }

    // $vm.show = false

    // let listCheckBox = {
      
    // }

    // if (!Vue.$listCheckBox) {
    //   Vue.$listCheckBox = listCheckBox
    // }
    Vue.component(ListCheckBox.name,ListCheckBox)
  }
}