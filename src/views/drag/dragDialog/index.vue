<template>
  <section>
    <el-card shadow="hover">
      <strong>点击按钮，鼠标移动到弹框头部"拖拽弹框"处，可实现拖拽功能。</strong>
      <div class="frontArea">
        <el-button type="primary" @click="visible = true;">点我弹框</el-button>
      </div>
      <el-dialog v-dialogDrag title="拖拽弹框" center :visible.sync="visible" width="30%">
        我是一个可以拖拽的对话框！
        <span slot="footer" class="dialog-footer">
          <el-button @click="visible = false">取 消</el-button>
          <el-button type="primary" @click="visible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </section>
</template>

<script>
export default {
  name: "DragDialog",
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.frontArea{
    margin-top: 15px;
}
</style>

