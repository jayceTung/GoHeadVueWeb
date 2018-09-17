<template>
    <div class="app-container">
        <!-- <div> -->
            <!-- <el-button type="warning" @click="delGroup" :disabled="this.sels.length === 0">删除选中</el-button>disabled值动态显示，默认为true,当选中复选框后值为false -->
        <!-- </div> -->
        <el-table :data="userInfos" v-loading="listLoading" element-loading-text="拼命加载中" border style="width: 100%;" @selection-change="selectItem">
            <el-table-column type="selection"  width="40px" align="center"></el-table-column>
            <el-table-column prop="id" label="ID" align="center" width="65px">
            </el-table-column>
            <el-table-column prop="userName" label="用户名" align="center" width="80px">
            </el-table-column>
            <el-table-column prop="userAvator" label="用户头像" align="center" width="100px" >
                <template slot-scope="scope">
                    <img  :src="scope.row.userAvator" alt="" style="width: 70px;height: 70px">
                </template>
            </el-table-column>
            <el-table-column prop="phone" label="手机号码" align="center" width="150px">
            </el-table-column>
            <el-table-column prop="email" label="电子邮件" align="center" width="180px">
            </el-table-column>
            <el-table-column prop="work" label="职业" align="center" width="100px">
            </el-table-column>
            <el-table-column prop="user.roleName" label="权限" align="center" width="100px">
            </el-table-column>
            <el-table-column prop="operator" label="操作" align="center" min-width="150px">
                <template slot-scope="scope">
                    <el-button size="small" type="primary" @click="editArticle(scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 页码条 -->
        <el-pagination layout="total, prev, pager, next, jumper"
                    background
                    :page-size="pageSize"
                    @size-change="handleSizeChange"
                    :total="total"
                    :current-page.sync="pageNo"
                    @current-change="handleCurrentChange"
                    style="text-align:center; margin: 20px;">
        </el-pagination>

    <!-- 删除弹框 -->
    <el-dialog
        title="删除"
        :visible.sync="deleteDialog"
        width="30%">
        <span>确认删除?</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="deleteDialog = false">取 消</el-button>
            <el-button type="primary" @click="submitDelete">确 定</el-button>
        </span>
    </el-dialog>
    </div>
</template>


<script>
import { queryUserInfo, deleteUserInfo } from "@/api/login"
export default {
  data() {
    return {
      userInfos: [],
      deleteDialog: false,
      listLoading: true,
      total: 0,
      pageNo: 1,
      pageSize: 10,
      userInfo: [],
      sels: []
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      queryUserInfo(this.pageNo, this.pageSize)
        .then(response => {
          this.listLoading = false
          this.userInfos = response.data
          this.total = response.total
        }).catch(error => {
          console.error(error);
        });
    },
    handleSizeChange(val) {
        this.page = val
        this.fetchData()
    },
    handleCurrentChange(val) {
        this.page = val
        this.fetchData()
    },
    editArticle(row) {
        console.log('article = ' + row.articleTitle)
        var temp = Object.assign({}, row)
        // this.$router.go(-1) 返回前一步
        this.$router.push({
            name: 'UserEdit',
            params: row
        })
    },
    handleDelete(row) {
        console.log('handleDelete = ' + row)
        this.deleteDialog = true
        this.userInfo = row
        var temp = Object.assign({}, row)
    },
    submitDelete() {
        deleteUserInfo(this.userInfo.uid)
            .then(response => {
                this.deleteDialog = false
                this.$router.go(0)
                this.$message.success('删除成功！')
            }).catch(error => {
                console.log(error)
                this.deleteDialog = false
                this.$message.error('删除失败！')
            })
    },
    selectItem(sels) {
        this.sels = sels
    },
    delGroup() {
        this.sels.forEach(item => {
            console.log(item)
            this.submitDelete(item)
        })
    },
  }
};
</script>
