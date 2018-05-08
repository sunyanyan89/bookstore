<template>
  <div>
      <MyHead>个人中心</MyHead>
      <div class="content user">
          <div class="charts">
            <my-highcharts :options="options[0]" :styles="{}"></my-highcharts>
            <my-highcharts :options="options[1]" :styles="{}"></my-highcharts>
            <my-highcharts :options="options[2]" :styles="{}"></my-highcharts>
          </div>
      </div>
  </div>
</template>
<script>
import MyHighcharts from '@/components/Highcharts'
export default {
    components: { MyHighcharts },
    data () {
        return {
            title: 'this is user',
            options: [{
                title: { text: '热门图书' },
                series: [{
                    type: 'pie',
                    name: '比例',
                    data: [
                        ['历史', 33.0],
                        ['心理学', 26.8],
                        { name: '外语',
                          y: 12.8,
                          sliced: true,  // 默认突出
                          selected: true // 默认选中 
                        },
                        ['儿童', 8.5],
                        ['教材', 6.2],
                        ['其他', 0.7]
                    ]
                }]
            },{
                chart: { type: 'column' },
                title: { text: '热门图书' },
                xAxis: { categories: ['历史', '心理学', '外语', '儿童', '教材', '其他'] },
                yAxis: { title: { text: '图书数量' } },
                series: [{
                    name: '数量',
                    data: [33.0, 26.8, 12.8, 8.5, 6.2, 0.7]
                }]
            },{
                chart: { type: 'spline' }, // 或者可以在series里面单独写type 此时这里的soline会被覆盖
                title: { text: '热门图书' },
                xAxis: { categories: ['历史', '心理学', '外语', '儿童', '教材', '其他'] },
                yAxis: { title: { text: '图书数量' } },                
                series: [{
                    type: 'spline',
                    name: '图书数量',
                    data: [33.0, 26.8, 12.8, 8.5, 6.2, 0.7]
                },{
                    type: 'column',
                    name: '图书数量',
                    data: [13.0, 16.8, 22.8, 18.5, 9.2, 1.7]
                }]
            }]
        }
    },
}
</script>
<style scoped>
.charts {
    background: pink;
}
</style>


