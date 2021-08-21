<template>
  <div id="demo2">
    <div class="main"
         ref="main">233</div>
    <div class="tree"
         ref='tree'>
      <el-tree :data="list"
               :props="defaultProps"
               @node-click="handleNodeClick"></el-tree>
    </div>
    <div class="div_demo"
         ref="div_demo"
         :style="{height:conheight2+'px'}">{{conheight2}}
      <div>
        {{this.$store.state.demo2}}
      </div>
      <div>
        <el-button type="primary" @click="handle">你过来啊</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import elementResizeDetectorMaker from 'element-resize-detector'
// import {mapState, mapActions, mapGetters} from 'vuex'
export default {
  name: 'demo2',
  data () {
    return {
      menu_list: [{
        id: '1',
        menu_name: '设置',
        menu_url: 'setting',
        parent_id: 0
      }, {
        id: '1-1',
        menu_name: '权限设置',
        menu_url: 'setting.permission',
        parent_id: '1'
      }, {
        id: '1-1-1',
        menu_name: '用户管理列表',
        menu_url: 'setting.permission.user_list',
        parent_id: '1-1'
      }, {
        id: '1-1-2',
        menu_name: '用户管理新增',
        menu_url: 'setting.permission.user_add',
        parent_id: '1-1'
      }, {
        id: '1-1-3',
        menu_name: '角色管理列表',
        menu_url: 'setting.permission.role_list',
        parent_id: '1-1'
      }, {
        id: '1-2',
        menu_name: '菜单设置',
        menu_url: 'setting.menu',
        parent_id: '1'
      }, {
        id: '1-2-1',
        menu_name: '菜单列表',
        menu_url: 'setting.menu.menu_list',
        parent_id: '1-2'
      }, {
        id: '1-2-2',
        menu_name: '菜单添加',
        menu_url: 'setting.menu.menu_add',
        parent_id: '1-2'
      }, {
        id: '2',
        menu_name: '订单',
        menu_url: 'order',
        parent_id: 0
      }, {
        id: '2-1',
        menu_name: '报单审核',
        menu_url: 'order.orderreview',
        parent_id: '2'
      }, {
        id: '2-2',
        menu_name: '退款管理',
        menu_url: 'order.refundmanagement',
        parent_id: '2'
      }
      ],
      list: [],
      defaultProps: {
        children: 'children',
        label: 'menu_name'
      },
      conheight: {
        height: ''
      },
      screenHeight: document.body.clientHeight,
      tableHeight: 0,
      conheight2: 0
    }
  },

  methods: {
    handle () {
      this.$store.commit('demo2/add')
    },
    //  计算高度
    getTreeHeight (dom) {
      return dom.offsetHeight
    },
    /**
   * 将一维的扁平数组转换为多层级对象
   * @param  {[type]} list 一维数组，数组中每一个元素需包含id和parent_id两个属性
   * @return {[type]} tree 多层级树状结构
   */
    buildTree (list) {
      let temp = {}
      let tree = {}
      for (let i in list) {
        temp[list[i].id] = list[i]
      }
      // console.log(`temp:`, temp)
      for (let i in temp) {
        if (temp[i].parent_id) {
          if (!temp[temp[i].parent_id].children) {
            // eslint-disable-next-line no-new-object
            temp[temp[i].parent_id].children = new Object()
          }
          temp[temp[i].parent_id].children[temp[i].id] = temp[i]
        } else {
          tree[temp[i].id] = temp[i]
        }
      }
      return Object.keys(tree).map(function (i) { return tree[i] })
    },
    handleNodeClick () {
    },
    /**
   * 该方法用于将有父子关系的数组转换成树形结构的数组
   * 接收一个具有父子关系的数组作为参数
   * 返回一个树形结构的数组
   */
    translateDataToTree (data) {
      // 没有父节点的数据
      // eslint-disable-next-line eqeqeq
      let parents = data.filter(value => value.parent_id === 0)
      // 有父节点的数据
      let children = data.filter(value => value.parent_id !== undefined && value.parent_id != null)
      // console.log('parents', parents);
      // console.log('children', children);
      // 定义转换方法的具体实现
      let translator = (parents, children) => {
        // 遍历父节点数据
        parents.forEach((parent) => {
          // 遍历子节点数据
          children.forEach((current, index) => {
            // 此时找到父节点对应的一个子节点
            if (current.parent_id === parent.id) {
              // 对子节点数据进行深复制，这里只支持部分类型的数据深复制，对深复制不了解的童靴可以先去了解下深复制
              let temp = JSON.parse(JSON.stringify(children))
              // 让当前子节点从temp中移除，temp作为新的子节点数据，这里是为了让递归时，子节点的遍历次数更少，如果父子关系的层级越多，越有利
              temp.splice(index, 1)
              // 让当前子节点作为唯一的父节点，去递归查找其对应的子节点
              translator([current], temp)
              // 把找到子节点放入父节点的children属性中
              typeof parent.children !== 'undefined' ? parent.children.push(current) : parent.children = [current]
            }
          }
          )
        }
        )
      }
      // 调用转换方法
      translator(parents, children)
      // 返回最终的结果
      return parents
    },
    watchSize () {
      const _this = this
      var erd = elementResizeDetectorMaker()
      erd.listenTo(this.$refs.tree, (element) => { // 这里的this.$refs.fan指定要监听的元素对象，对应的是<div ref="fan"></div>
        // eslint-disable-next-line no-unused-vars
        // var width = element.offsetWidth
        // eslint-disable-next-line no-unused-vars
        var height = element.offsetHeight
        _this.$nextTick(() => { // 这里填写监听改变后的操作
          _this.conheight2 = window.innerHeight - height - this.$refs.main.offsetHeight - 2
        })
      })
    }

  },
  created () {
    /** 扁平的数组转树 */
    this.list = this.translateDataToTree(this.menu_list)
  },
  mounted () {
    this.watchSize()
  },
  watch: {

  },
  computed: {
    // ...mapState({
    //
    // })
  }
}
</script>

<style lang="less" scoped>
#demo2 {
  // box-sizing: border-box;
  border: 1px solid black;
  // height: 100vh;
  font-size: 24px;
  background-color: #999;
  .main {
    color: red;
  }
  .tree {
    border: 1px solid blueviolet;
  }
  .div_demo {
    width: 100%;
    background-color: #233;
  }
}
</style>
