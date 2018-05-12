<template>
  <div>
      <MyHead :isBack='true'>我的购物车</MyHead>
      <div class="content">
        <Row>
            <Col span='12'></Col>
            <Col span='4'>
                <Button type="info" @click="minus">-</Button>
            </Col>
            <Col span='4'>
                <Input v-model="this.$store.state.count"></Input>
            </Col>
            <Col span='4'>
                <Button type="info" @click="add">+</Button>
            </Col>
        </Row>
      </div>
  </div>
</template>
<script>
// import 
export default {
  data () {
      return {
          title: 'this is cart'
      }
  },
  methods: {
      add() {
          this.$store.commit('add',2)
      },
      minus() {
          this.$store.commit('minus',1)
      }
  }
}
</script>
<style>
.content {
    position: fixed;
    top: 40px;
}
</style>


