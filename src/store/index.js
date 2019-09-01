import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
// 使用插件都是这样使用的

// 申明一个仓库
export default new Vuex.Store({
    state,
    // actions: {
    //     changeCity (ctx, city) {
    //         ctx.commit('changeCity', city)
    //     }
    // },
    // 没有复杂的操作或者异步的操作，组件可以直接调用mutations，不用通过actions
    mutations
})
