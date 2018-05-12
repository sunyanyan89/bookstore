<template>
  <div class="highcharts-container"></div>
</template>
<script>
import Highcharts from 'highcharts/highstock'

export default {
  name: 'highchart',
  props: ['options', 'styles'],
  data() {
      return {
          chart: null
      }
  },
  mounted() {
      console.log(this.$el)
      this.initChart()
  },
  methods: {
      initChart() {
          Highcharts.setOptions({
              credits: { enabled: false }
          })
          this.$el.style.width = (this.styles.width || 400) + 'px'
          this.$el.style.height = (this.styles.height || 300) + 'px'
          this.chart = new Highcharts.Chart(this.$el, this.options)
      }
  }
}
</script>
<style scoped>
.highcharts-container {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    margin-bottom: 0.5rem;
}
</style>

