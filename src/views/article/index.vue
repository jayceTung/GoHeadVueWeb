<template>
  <!--<el-table :data="tableList" v-loading="listLoading" border element-loading-text="拼命加载中" style="width: 100%;">-->
    <!--<el-table-column prop="uid" label="序号" width="65">-->
    <!--</el-table-column>-->
    <!--<el-table-column prop="cname" label="姓名">-->
    <!--</el-table-column>-->
    <!--<el-table-column prop="title" min-width="150px" label="标题">-->
    <!--</el-table-column>-->
    <!--<el-table-column prop="number" label="阅读数"  width="65">-->
    <!--</el-table-column>-->
    <!--<el-table-column prop="date" label="时间" width="110px">-->
    <!--</el-table-column>-->
    <!--<el-table-column  label="状态" width="120" >-->
      <!--<template slot-scope="scope">-->
        <!--<el-tag size="small" :type="scope.row.status | statusFilter" @click="isStatus(scope.$index, scope.row)" v-if="scope.row.status == 1">启用</el-tag>-->
        <!--<el-tag size="small"  :type="scope.row.status | statusFilter" @click="isStatus(scope.$index, scope.row)" v-if="scope.row.status == 2">禁用</el-tag>-->
      <!--</template>-->
    <!--</el-table-column>-->
    <!--<el-table-column prop="operation" label="操作 ">-->
      <!--<template slot-scope="scope" >-->
        <!--<el-button size="small" type="primary"  @click="handleUpdate(scope.row)">编辑</el-button>-->
        <!--<el-button v-if="scope.row.status!='2'" size="mini" type="success" @click="handleModifyStatus(scope.row,'2')">启用-->
        <!--</el-button>-->
        <!--<el-button v-if="scope.row.status!='1'" size="mini" @click="handleModifyStatus(scope.row,'1')">禁用-->
        <!--</el-button>-->
        <!--<el-button size="small" type="danger" @click="deleteUpdate(scope.row)">删除</el-button>-->
      <!--</template>-->
    <!--</el-table-column>-->
  <!--</el-table>-->
    <div class="app-container">
        <el-table :data="articles" v-loading="listLoading" element-loading-text="拼命加载中" border style="width: 100%;">
            <el-table-column prop="id" label="序号" align="center" width="65px">
            </el-table-column>
            <el-table-column prop="articleTitle" label="标题" align="center" min-width="150px">
            </el-table-column>
            <el-table-column prop="articleCreateDate" label="时间" align="center" width="180px">
            </el-table-column>
        </el-table>
        <!-- 页码条 -->
        <el-pagination layout="total, prev, pager, next"
                    background
                    :page-size="pageSize"
                    @size-change="handleSizeChange"
                    :total="total"
                    @current-change="handleCurrentChange"
                    style="text-align:center;">
        </el-pagination>
    </div>
</template>


<script>
import { getArticle } from "@/api/article";
export default {
  data() {
    return {
      articles: [],
      listLoading: true,
      total: 0,
      page: 1,
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
    }
  }
};
</script>
