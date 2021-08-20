<template>
  <div ref="singleTable2">
    <div>2333</div>
    <el-table ref="singleTable"
              :data="tableData"
              :height="tableHeight + 'px'"
              border
              highlight-current-row
              style="width: 100%">
      <el-table-column width="80"
                       type="index"
                       label="序号"
                       align="center">
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true"
                       prop="name"
                       label="名称"
                       align="center">
      </el-table-column>
    </el-table>
  </div>

</template>
<script>
export default {
  name: 'demo3',
  data () {
    return {
      tableHeight: 0,
      tableData: []
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      console.log(this.$refs['singleTable2'])
      this.tableHeight = this.getTreeHeight(this.$refs['singleTable'].$el) - 50
    })
  },

  methods: {
    //  计算高度
    getTreeHeight (dom) {
      return window.innerHeight - dom.offsetTop
    }

  }
}
</script>

<style lang="less" scoped>
</style>
