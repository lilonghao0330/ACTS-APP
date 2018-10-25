import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  chartOption1 : EChartOption;
  chartOption2 : EChartOption;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.slice(0, 12);
        var xaxis = heroes.map(hero => hero.name);
        var yaxis = heroes.map(hero => hero.order);
        var zaxis = heroes.map(hero => hero.goal);
        var data2 = yaxis.map((value,index) => value/zaxis[index]);
        var data = heroes.map(hero => {
          return {
            value: hero.order,
            name: hero.name
          }
        });
        // var aaxis = yaxis / zaxis;
        console.log(xaxis);
        console.log(data2);
          var chartOption1 = {
            title : {
              text: '営業担当受注数シェア',
              x:'center'
            },
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              left: 'left',
              data: xaxis
            },
            series : [
              {
                name: '受注数',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:data,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
          ]
        }
        var labelRight = {
    normal: {
        position: 'right'
    }
};
        var chartOption2 = {
          title: {
          text: '目標達成率一覧',
          x: 'center'
      },
      tooltip : {
          trigger: 'axis',
          axisPointer : {
              type : 'shadow'
          }
      },
      grid: {
          top: 80,
          bottom: 30
      },
      xAxis: {
          type : 'value',
          position: 'top',
          splitLine: {lineStyle:{type:'dashed'}},
      },
      yAxis: {
          type : 'category',
          axisLine: {show: false},
          axisLabel: {show: false},
          axisTick: {show: false},
          splitLine: {show: false},
          data : xaxis
      },
      series : [
          {
              name:'達成率',
              type:'bar',
              stack: 'total',
              label: {
                  normal: {
                      show: true,
                      formatter: '{b}'
                  }
              },
              data:data2,
          }
      ]
      }
        this.chartOption1 = chartOption1;
        this.chartOption2 = chartOption2;
      });
  }

}
