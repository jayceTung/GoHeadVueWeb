<template>
  <div class="app-container">
      <el-form :model="userInfo" :rules="rules" ref="userInfo" label-width="100px" class="userFrom">
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="userInfo.userName" style="width: 250px" placeholder="请输入3到15个字符的用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model.trim="userInfo.password" style="width: 250px" placeholder="请输入不少于7个字符的密码"></el-input>
            </el-form-item>
            <el-form-item label="用户头像" prop="userAvator">
                <el-input v-model.trim="userInfo.userAvator" style="width: 600px" placeholder="请输入头像链接"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" prop="phone">
                <el-input type="ph" v-model.trim="userInfo.phone" style="width: 250px" placeholder="请输入手机号码"></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱" prop="email">
                <el-input v-model.trim="userInfo.email" style="width: 250px" placeholder="请输入电子邮箱"></el-input>
            </el-form-item>
            <el-form-item label="职业" prop="work">
                <el-input v-model.trim="userInfo.work" style="width: 250px" placeholder="请输入职业"></el-input>
            </el-form-item>
            <el-form-item label="是否为管理员" prop="admin">
                <el-switch v-model="userInfo.roleName" active-value="admin" inactive-value="user"></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('userInfo')">立即创建</el-button>
                <el-button @click="resetForm('userInfo')">重置</el-button>
            </el-form-item>
      </el-form>
  </div>
</template>
<script>
import { addArticle } from "@/api/article"
import { isvalidPhone, isvalidEmail } from "@/utils/index"

//定义一个全局的变量，谁用谁知道
var validPhone = (rule, value, callback) => {
    if (!value){
        callback(new Error('请输入电话号码'))
    } else  if (!isvalidPhone(value)){
        callback(new Error('请输入正确的11位手机号码'))
    }else {
        callback()
    }
}

var vaildEmail = (rule, value, callback) => {
    if (!value) {
        callback(new Error('请输入电子邮箱'))
    } else if (!isvalidEmail(value)) {
        callback(new Error('请输入正确格式的电子邮箱'))
    } else {
        callback()
    }
}

export default {
    data() {
      return {
        userInfo: {
        },
        user: {
        },
        rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
          password: [
              {required: true, message: '请输入密码', trigger: 'blur'},
              {min: 7, message: '密码长度不少于7', trigger: 'blur'}
          ],
          userAvator: [
              {required: true, message: '请输入头像链接', trigger: 'blur'}
          ],
          phone: [
              {required: true, trigger: 'blur', validator: validPhone}
          ],
          email: [
              {required: true, trigger: 'blur', validator: vaildEmail}
          ],
          work: [
              {required: true, message: '请输入职业', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (!valid) {
              if (!this.userInfo.id) {
                  this.user['userName'] = this.userInfo.userName
                  this.user['password'] = this.userInfo.password
                  this.user['roleName'] = this.userInfo.roleName
                  this.userInfo['user'] = this.user
                  addArticle(this.userInfo).then(response => {
                    this.$notify({
                        title: '成功',
                        message: '提交成功',
                        type: 'success',
                        duration: 2000
                    })
                  }).catch(error => {
                    this.$message.error('提交失败！')
                    console.error(error);
                  });
              } else {
                //   updateUserInfo.then(response => {
                //     this.$notify({
                //         title: '成功',
                //         message: '提交成功',
                //         type: 'success',
                //         duration: 2000
                //     })
                //   })
              }
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    },
    mounted: function() {

    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
    .userFrom {
        margin-top: 30px;
        margin-left: 80px;
    }
</style>




