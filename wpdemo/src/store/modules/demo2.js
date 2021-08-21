/**
 * @name:文件名 demo
 * @author:作者 D_xiaohei
 * @date:文件创建时间 2021-08-20 21:06
 * @description：文件描述 demo
 * @update:文件更新时间  2021-08-20 21:06
 */

const state = {
  demo: 'demo里的demo'
}

const mutations = {
  GET_DEMO: (state, { key, value }) => {
    console.log(key, value)
  },
  add: (state) => {
    state.demo += '+++,'
  }
}

const actions = {
  changeSetting ({ commit }, data) {
    commit('GET_DEMO', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
