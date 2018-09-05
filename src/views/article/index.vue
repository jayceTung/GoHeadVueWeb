<template>
    <div class="app-container">
        <el-table :data="articles" v-loading="listLoading" element-loading-text="拼命加载中" border style="width: 100%;">
            <el-table-column prop="id" label="序号" align="center" width="65px">
            </el-table-column>
            <el-table-column prop="articleTitle" label="标题" align="center" min-width="150px">
            </el-table-column>
            <el-table-column prop="articleCreateDate" label="时间" align="center" width="180px">
            </el-table-column>
            <el-table-column prop="operator" label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="small" type="primary" @click="editArticle(scope.row)">编辑</el-button>
                    <el-button size="small" type="primary" @click="handleDelete(scope.row)">删除</el-button>
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
import { getArticle } from "@/api/article";
export default {
  data() {
    return {
      articles: [],
      deleteDialog: false,
      listLoading: true,
      total: 0,
      pageNo: 1,
      pageSize: 10,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getArticle(this.page, this.pageSize)
        .then(response => {
          this.listLoading = false
          this.articles = response.data
          this.total = response.total
        })
        .catch(error => {
          console.error(error);
        });
    },
    handleSizeChange(val) {
        this.page = val
        console.log(this.page)
        this.fetchData()
    },
    handleCurrentChange(val) {
        this.page = val
        console.log(this.page)
        this.fetchData()
    },
    editArticle(row) {
        console.log('article = ' + row.articleTitle)
        var temp = Object.assign({}, row)
        // this.$router.go(-1) 返回前一步
        this.$router.push({
            name: 'ArticleEditor',
            params: row
        })
    },
    handleDelete(row) {
        console.log('handleDelete = ' + row)
        this.deleteDialog = true
        var temp = Object.assign({}, row)
    },
    submitDelete() {

    }
  }
};
</script>
