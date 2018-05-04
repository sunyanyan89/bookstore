<template>
  <div class="header">
    <Icon type="arrow-return-left" v-if="isBack" @click.native="goBack"></Icon>
    <slot></slot>
  </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: '首页'
        },
        isBack: {
            type: Boolean,
            default: true
        },
    },
    data () {
        return {
            
        }
    },
    methods: {
        goBack () {
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="less" scoped>
.header {
    position: fixed;
    top: 0;
    text-align: center;
    line-height: 40px;
    width: 100%;
    height: 40px;
    background-color: #defedd;
    i {
        position: absolute;
        font-size: 25px;
        left: 20px;
        top: 5px;
    }
}
</style>

