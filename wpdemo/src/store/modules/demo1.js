/**
 * @name:文件名 demo
 * @author:作者 D_xiaohei
 * @date:文件创建时间 2021-08-20 21:06
 * @description：文件描述 demo
 * @update:文件更新时间  2021-08-20 21:06
 */

export default {
  namespaced: true,
  state: {
    demo: 'demo1里的233'
  },
  mutations: {
    add: (state) => {
      state.demo += '+++,'
    }
  },
  actions: {
  },
  getters: {
  }
}
