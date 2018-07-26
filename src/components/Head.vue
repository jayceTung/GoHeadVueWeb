<template>
  <div class="login-wrap">
    <!--<img v-bind:src="seller.avatar"/>-->
    <el-form  label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm login-container">
      <h3 class="title">用户登录</h3>
      <el-form-item prop="userName">
        <el-input type="text" v-model="ruleForm.userName"  auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password"  v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox class="remember">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;"  @click="submitForm('ruleForm')" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  import { requestLogin, getUserInfo } from '../api/api';
  const ERR_OK = 0;
  export default {
    data() {
      return {
        logining: false, //定义loading默认为false
        ruleForm: {            //username和password默认为空
          userName: '',
          password:''
        },
        rules: {          //rules前端验证
          userName: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm);
            const res = requestLogin(this.ruleForm);
//            const s = getUserInfo(2);
            res.then(response => {
              console.log(response.data);
            })

            setTimeout(() => {
              this.logining = false;
              this.$router.push({ path: '/food' });//如果请求成功就让他3秒跳转路由
            }, 2000);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login-container
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06)
    border-radius: 5px;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    .remember
      margin: 0px 0px 35px 0px;
</style>
