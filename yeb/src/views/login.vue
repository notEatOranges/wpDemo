<template>
  <div>
    <el-form ref="form"
             :v-model="loginForm"
             label-width='80px'>
      <h3>系统登录</h3>
      <el-form-item label='用户'>
        <el-input v-model.trim="loginForm.username"
                  type='text'
                  placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label='密码'>
        <el-input v-model.trim="loginForm.password"
                  type='password'
                  auto-complete='false'
                  placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: "admin",
        password: "123",
        code: ""
      }
    }
  }
}
</script>

<style>
</style>