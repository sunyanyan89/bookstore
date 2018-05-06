<template>
  <div>
      <!-- 注意下面isBack的写法
        :isBack='true' 组件收到的isBack是 Boolean
        :isBack=true   组件收到的isBack是 Boolean
        isBack =true   组件收到的isBack是 String
        isBack ='true'   组件收到的isBack是 String
       -->
      <MyHead :isBack='true' type='list'>{{book.bookName}}</MyHead>      
      <div class="content">
        <img :src="book.bookImg">
        <div class="info" v-if="isEdit">
            <Row>
                <Col span='6'>标题</Col>
                <Col span='16'><Input v-model="book.bookName"></Input></Col>
            </Row>
            <Row>
                <Col span='6'>描述</Col>
                <Col span='16'><Input v-model="book.bookDesc" :rows='4' type="textarea"></Input></Col>
            </Row>
            <Row>
                <Col span='6'>作者</Col>
                <Col span='16'><Input v-model="book.bookAuthor"></Input></Col>
            </Row>
            <Row>
                <Col span='6'>价格</Col>
                <Col span='16'><Input v-model="book.bookPrice"></Input></Col>
            </Row>
            <Row>
                <Col span='6'>是否热门</Col>
                <Col span='6'>
                    <RadioGroup v-model="book.isHot">
                        <Radio label='1'>是</Radio></Radio>
                        <Radio label='0'>否</Radio>
                    </RadioGroup>
                </Col>
            </Row>
            <Row><Col span='24'><Button type="info" @click="submit">提交</Button></Col></Row>
        </div>
        <div class="info static" v-else>
            <p><span>标题：</span><span>{{book.bookName}}</span></p>
            <p><span>描述：</span><span>{{book.bookDesc}}</span></p>
            <p><span>作者：</span><span>{{book.bookAuthor}}</span></p>
            <p><span>价格：</span><span>{{book.bookPrice}}</span></p>
        </div>
      </div>
  </div>
</template>
<script>
import {getOneBook, updateBook} from '@/api'
export default {
    created () {
        this.getCurrBook()
    },
    data () {
        return {
            book: []
        }
    },
    methods: {
        async getCurrBook () {
            this.book = await getOneBook(this.$route.params.id)
            if(!this.book) this.$router.push('/list')
        },
        async submit () {
            await updateBook(this.book.bookId, this.book)
            this.$router.push('/list') // 修改完跳转回列表页
        }
    },
    computed: {
        isEdit () {
            return this.$route.name.indexOf('Edit') > -1 ? 1 : 0
        }
    },
    watch: {
        $route (to, from) {
            this.getCurrBook()
        }
    }
}
</script> 
<style lang="less" scoped>
.content {
    padding-top: 2rem;
    text-align: center;
    img {
        width: 50%;
        margin-bottom: 1rem;
    }
    .ivu-row {
        margin-bottom: 1rem;
    }
    .static {
        padding: 15px 25px;
        p {
            display: flex;
            flex-direction: row;
            line-height: 2rem;
            span:first-child {
                width: 30%;
                font-weight: bold;
            }
            span:last-child {
                width: 70%;
                text-align: left
            }
        }
    }
}
</style>
