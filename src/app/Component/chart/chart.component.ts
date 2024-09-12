import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts'; 

import { NgxEchartsModule } from 'ngx-echarts'; 
// import { EChartsOption } from 'echarts'; 

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgxEchartsModule], 

  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  chartOptions: echarts.EChartsOption = {}; 
  xAxisData = [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر',
  ];
  data1: number[] = [];

  ngOnInit(): void {
    
    for (let i = 0; i < 12; i++) {
      this.data1.push(Math.abs(Math.sin(i) * (Math.random() * 10 + 5)));
    }

   
    this.chartOptions = {
      legend: {
        show: false, 
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        textStyle: {
          color: '#000',
        },
        formatter: (params: any) => {
          const value = params[0].value;
          return `استخدام: ${Math.round(value * 10)}<br/> نسبة: ${(value * 10).toFixed(1)}%`;
        },
      },
      xAxis: {
        type: 'category',
        data: this.xAxisData, 
        axisLine: {
          lineStyle: {
            color: '#ccc',
          },
        },
        axisLabel: {
          color: '#666',
          fontSize: 12,
        },
        boundaryGap: false,
      },
      yAxis: {
        show: false, 
        min: 0,
      },
      grid: {
        left: '5%',
        right: '6%',
        top: '30%',
        bottom: '5%',
      },
      series: [
        {
          name: 'استخدام',
          type: 'line',
          data: this.data1,
          smooth: true,
          symbol: 'circle',
          symbolSize: 8,
          lineStyle: {
            color: '#6366f1',
            width: 3,
          },
          areaStyle: {
            color: 'rgba(99, 102, 241, 0.2)',
            origin: 'start',
          },
          emphasis: {
            focus: 'series',
          },
          animationDelay: (idx: number) => idx * 10,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx: number) => idx * 5,
    };
  }
}
