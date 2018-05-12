<template>
  <div class="header">
    <Icon :type="iconType" v-if="isBack" @click.native="goBack"></Icon>
    <slot></slot>
    <div class="push-right"><slot name="right"></slot></div>
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
        type: {
            type: String,
            default: 'arrow'
        }
    },
    data () {
        return {
            
        }
    },
    computed: {
        iconType () {
            return this.type === 'arrow' ? 'arrow-left-c' : 'navicon-round'
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
    &>i {
        position: absolute;
        font-size: 30px;
        left: 20px;
        top: 5px;
    }
    .push-right {
        font-size: 25px;
        float: right;
        padding-right: 1rem;
    }
}
</style>

