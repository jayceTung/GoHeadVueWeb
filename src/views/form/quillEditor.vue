<template>
    <div class="app-container">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>编辑器</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips" style="display: none;">
                Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。
                访问地址：<a href="https://quilljs.com/docs/api/#content" target="_blank">vue-quill-editor</a>
            </div>
            <span>文章标题:</span>
            <el-input v-model="article.articleTitle" placeholder="请输入标题"></el-input>
            <span>文章内容:</span>
            <div class="editor">
                <quill-editor ref="myTextEditor" v-model="article.articleContent" :options="editorOption" >
                </quill-editor>
            </div>
            <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
        </div>
    </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import { updateArticle, addArticle } from '@/api/article'
import { getUsername } from '@/utils/auth'
export default {
  name: 'editor',
  data() {
    return {
      content: '',
      editorOption: {
        placeholder: '请输入内容'
      },
      article: this.$route.params,
    }
  },
  components: {
    quillEditor
  },
  methods: {
    onEditorChange({ editor, html, text }) {
      this.content = html
    },
    submit() {
      if (!this.article.articleContent) {
        new Error('请输入内容')
        return
      }
      if (!this.article.articleTitle) {
        new Error('请输入标题')
        return
      }
      if (!this.article.id) {
        this.article['addName'] = getUsername()
        addArticle(this.article)
            .then(response => {
                this.article = []
                this.$router.go(0)
                this.$message.success('提交成功！')
            }).catch(error => {
                this.$message.error('提交失败！')
                console.error(error);
        });
       console.log('addArticle')
      } else {
         updateArticle(this.article)
            .then(response => {
                this.article = []
                this.$router.push({name:'Article'})
                this.$message.success('提交成功！')
            }).catch(error => {
                this.$message.error('提交失败！')
                console.log(error)
            })
        console.log('updateArticle')
      }
    }
  },
  mounted: function() {
      console.log('quillEditor = ' + this.article)
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .editor-btn{
      margin-bottom: 10px;
    }
    .crumbs,.plugins-tips {
      margin-bottom: 20px
    }
    .container {
      padding: 30px;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
      overflow: hidden;
    }
    .editor {
      margin-top: 10px;
      margin-bottom: 100px;
      .quill-editor{
          height: 350px;
      }
    }
    span {
      font-size: 18px;
      color: #000;
    }
    .el-input {
      margin: 10px 0px 10px 0px;
    }
</style>