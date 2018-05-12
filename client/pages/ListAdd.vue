<template>
  <div>
      <MyHead :isBack='true' type='list'>新增图书</MyHead>      
      <div class="content">
        <img src='/static/imgs/books/default_cover.jpg'>
        <div class="info">
            <Row>
                <Col span='6'>封面</Col>
                <Col span='4'>
                     <Upload action="">
                        <Button type="ghost" icon="ios-cloud-upload-outline">上传封面</Button>
                    </Upload>
                </Col>
                <Col span='10'>
                    <Checkbox v-model='defaultCover'>使用默认封面</Checkbox>
                </Col>
            </Row>
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
            <Row><Col span='24'><Button type="info" size="large" @click="submit">确认添加</Button></Col></Row>
        </div>
      </div>
  </div>
</template>
<script>
import {addBook} from '@/api'
export default {
    data () {
        return {
            defaultCover: true,
            book: {
                bookName: '',
                bookImg: "/static/imgs/books/default_cover.jpg",
                bookPrice: '',
                bookDesc: '',
                bookAuthor: '',
                isHot: ''
            }
        }
    },
    methods: {
        async submit () {
            console.log(this.book)
            await addBook(this.book)
            this.$router.push('/list') // 新增完跳转回列表页
        }
    },
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
}
</style>
