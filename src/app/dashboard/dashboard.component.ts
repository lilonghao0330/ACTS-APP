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
  chartOption : EChartOption;

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
        console.log(xaxis);
        console.log(yaxis);
          var chartOption = {
          xAxis: {
            type: 'category',
            data:xaxis,
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data:  yaxis,
            type: 'bar'
          }]
        }
        this.chartOption = chartOption;
      });
  }

}
